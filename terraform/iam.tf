resource "aws_iam_role_policy" "lambda_policy" {
    name = "lambda_gtfsrt_policy"
    role = aws_iam_role.lambda_role
    policy = data.aws_iam_policy_document.lambda_policy
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_gtfsrt_role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role_policy
}

data "aws_iam_policy_document" "lambda_assume_role_policy" {
    statement {
      actions = [ "sts:AssumeRole" ]
      principals {
        type = "Service"
        identifiers = [ "lambda.amazonaws.com" ]
      }
      effect = "Allow"
    }
}

data "aws_iam_policy_document" "lambda_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]

    resources = [
      data.terraform_remote_state.main_infra.outputs.private_bucket_arn,
      "${data.terraform_remote_state.main_infra.outputs.private_bucket_arn}/*",
    ]
  }

  statement {
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:DeleteObject"
    ]

    resources = [
      "${data.terraform_remote_state.main_infra.outputs.api_bucket_arn}/canberra/v1/route/*/live.pb",
      "${data.terraform_remote_state.main_infra.outputs.api_develop_bucket_arn}/canberra/v1/route/*/live.pb"
    ]
  }
}