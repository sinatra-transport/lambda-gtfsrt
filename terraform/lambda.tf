resource "aws_s3_object_copy" "artifact" {
  bucket             = data.terraform_remote_state.main_infra.outputs.bucket_lambda_name
  key                = "${timestamp()}/lambda-gtfsrt.zip"
  source             = "${data.terraform_remote_state.main_infra.outputs.bucket_lambda_name}/lambda-gtfsrt.zip"
  checksum_algorithm = "SHA256"
}

resource "aws_lambda_function" "lambda_gtfsrt" {
    function_name = "gtfsrt"
    s3_bucket = aws_s3_object_copy.artifact.bucket
    s3_key = aws_s3_object_copy.artifact.key
    role = aws_iam_role.lambda_role.arn
    handler = "index.handler"
    runtime = "nodejs22.x"

    memory_size = 128
    timeout = 10
    architectures = [ "x86_64" ]

    depends_on = [
        aws_iam_role_policy_attachment.lambda_logs,
        aws_cloudwatch_log_group.cloudwatch_gtfsrt
    ]
}

// Develop schedule

resource "aws_cloudwatch_event_rule" "lambda_schedule_develop" {
  name = "lambda_gtfsrt_schedule_develop"
  description = "trigger lambda gtfsrt every 10 minutes for develop"
  state = "ENABLED"

  schedule_expression = "rate(10 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target_develop" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_develop.name
  target_id = "SendToLambda"
  arn = aws_lambda_function.lambda_gtfsrt.arn
  input = jsonencode({
    "gtfsrtUrl": "https://files.transport.act.gov.au/feeds/lightrail.pb",
    "destinationBucket": "sinatra-develop-api"
    "ttl": 10
  })
}

resource "aws_lambda_permission" "allow_eventbridge_develop" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_gtfsrt.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_develop.arn
}

// Prod schedule

resource "aws_cloudwatch_event_rule" "lambda_schedule_prod" {
  name = "lambda_gtfsrt_schedule_prod"
  description = "trigger lambda gtfsrt every 1 minute for prod"
  state = "ENABLED"

  schedule_expression = "rate(1 minute)"
}

resource "aws_cloudwatch_event_target" "lambda_target_prod" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_prod.name
  target_id = "SendToLambda"
  arn = aws_lambda_function.lambda_gtfsrt.arn
  input = jsonencode({
    "gtfsrtUrl": "https://files.transport.act.gov.au/feeds/lightrail.pb",
    "destinationBucket": "sinatra-api"
    "ttl": 2
  })
}

resource "aws_lambda_permission" "allow_eventbridge_prod" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_gtfsrt.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_prod.arn
}