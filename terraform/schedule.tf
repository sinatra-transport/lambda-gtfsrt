// Prod schedule
resource "aws_cloudwatch_event_rule" "lambda_schedule_prod" {
  name = "lambda_gtfsrt_schedule_prod"
  description = "trigger lambda gtfsrt every 6 minute for prod"
  state = "DISABLED"

  schedule_expression = "rate(6 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target_prod" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_prod.name
  target_id = "SendToLambda"
  arn = module.lambda_gtfsrt.lambda_function_arn
  input = jsonencode({
    "gtfsrt_url": "https://transport.api.act.gov.au/gtfs/data/gtfs/v2/trip-updates.pb",
    "table_upload": aws_dynamodb_table.gtfsrt_live_prod.id
    "ttl": 720,
    "bucket_trip_index": data.terraform_remote_state.main_infra.outputs.bucket_private_name,
    "key_trip_index": "trip-index.pb"
  })
}

resource "aws_lambda_permission" "allow_eventbridge_prod" {
  statement_id  = "AllowExecutionFromEventBridgeProd"
  action        = "lambda:InvokeFunction"
  function_name = module.lambda_gtfsrt.lambda_function_arn
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_prod.arn
}