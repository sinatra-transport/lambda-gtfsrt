resource "aws_apigatewayv2_integration" "dynamo_route_integration" {
  api_id                    = data.terraform_remote_state.main_infra.outputs.apigateway_http_id
  integration_type          = "AWS_PROXY"
  integration_uri           = "arn:aws:apigateway:ap-southeast-2:dynamodb:action/GetItem"
  credentials_arn           = aws_iam_role.gateway_role.arn
  payload_format_version    = "1.0"
  request_templates = {
    "application/x-protobuf" = <<EOF
{
  "TableName": "${aws_dynamodb_table.gtfsrt_live_prod.name}",
  "Key": {
    "path": {"S": "/canberra/v1/$input.params('kind')/$input.params('id')/live.pb"}
  }
}
EOF
  }
}


resource "aws_apigatewayv2_route" "route_live" {
  api_id    = data.terraform_remote_state.main_infra.outputs.apigateway_http_id
  route_key = "GET /canberra/v1/{kind}/{id}/live.pb"
  target    = "integrations/${aws_apigatewayv2_integration.dynamo_route_integration.id}"
}

resource "aws_apigatewayv2_integration_response" "route_live_response" {
  api_id = data.terraform_remote_state.main_infra.outputs.apigateway_http_id
  integration_id = aws_apigatewayv2_integration.dynamo_route_integration.id
  
  integration_response_key = "/200/"

  response_templates = {
    "application/x-protobuf" = "$input.path('$.Item.contents.S')"
  }
}

resource "aws_iam_role_policy" "gateway_policy" {
    name = "gateway_integration_gtfsrt_policy"
    role = aws_iam_role.gateway_role.id
    policy = data.aws_iam_policy_document.gateway_policy.json
}

resource "aws_iam_role" "gateway_role" {
  name = "gateway_integration_gtfsrt_role"
  assume_role_policy = data.aws_iam_policy_document.gateway_assume_role_policy.json
}

data "aws_iam_policy_document" "gateway_assume_role_policy" {
  statement {
    actions = [ "sts:AssumeRole" ]
    principals {
      type = "Service"
      identifiers = [ "lambda.amazonaws.com" ]
    }
    effect = "Allow"
  }
}

data "aws_iam_policy_document" "gateway_policy" {
  statement {
    actions = [
      "dynamodb:GetItem",
    ]

    resources = [
      aws_dynamodb_table.gtfsrt_live_prod.arn
    ]
  }
}