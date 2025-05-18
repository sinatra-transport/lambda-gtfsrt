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

resource "aws_cloudwatch_event_rule" "lambda_schedule" {
  name = "lambda_gtfsrt_schedule"
  description = "trigger lambda gtfsrt every 10 minutes"

  schedule_expression = "rate(10 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target" {
  rule = aws_cloudwatch_event_rule.lambda_schedule.name
  target_id = "SendToLambda"
  arn = aws_lambda_function.lambda_gtfsrt.arn
  input = jsonencode({
    "gtfsrtUrl": "https://files.transport.act.gov.au/feeds/lightrail.pb",
    "destinationBucket": "sinatra-develop-api"
    "ttl": 20
  })
}

resource "aws_lambda_permission" "allow_eventbridge" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_gtfsrt.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule.arn
}