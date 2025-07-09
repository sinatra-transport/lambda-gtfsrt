// Develop schedule

resource "aws_cloudwatch_event_rule" "lambda_schedule_develop" {
  name = "lambda_gtfsrt_schedule_develop"
  description = "trigger lambda gtfsrt every 20 minutes for develop"
  state = "ENABLED"

  schedule_expression = "rate(20 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target_develop" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_develop.name
  target_id = "SendToLambda"
  arn = module.lambda_gtfsrt.lambda_function_arn
  input = jsonencode({
    "gtfsrt_url": "https://transport.api.act.gov.au/gtfs/data/gtfs/v2/trip-updates.pb",
    "bucket_upload": data.terraform_remote_state.main_infra.outputs.bucket_api_develop_name
    "ttl": 1800,
    "bucket_trip_index": data.terraform_remote_state.main_infra.outputs.bucket_private_name,
    "key_trip_index": "trip-index.pb"
  })
}

resource "aws_lambda_permission" "allow_eventbridge_develop" {
  statement_id  = "AllowExecutionFromEventBridgeDevelop"
  action        = "lambda:InvokeFunction"
  function_name = module.lambda_gtfsrt.lambda_function_arn
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_develop.arn
}

// Prod schedule

resource "aws_cloudwatch_event_rule" "lambda_schedule_prod" {
  name = "lambda_gtfsrt_schedule_prod"
  description = "trigger lambda gtfsrt every 4 minute for prod"
  state = "ENABLED"

  schedule_expression = "rate(4 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target_prod" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_prod.name
  target_id = "SendToLambda"
  arn = module.lambda_gtfsrt.lambda_function_arn
  input = jsonencode({
    "gtfsrt_url": "https://transport.api.act.gov.au/gtfs/data/gtfs/v2/trip-updates.pb",
    "bucket_upload": data.terraform_remote_state.main_infra.outputs.bucket_api_prod_name
    "ttl": 600,
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