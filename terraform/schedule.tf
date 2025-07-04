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
    "gtfsrtUrl": "https://transport.api.act.gov.au/gtfs/data/gtfs/v2/trip-updates.pb",
    "destinationBucket": data.terraform_remote_state.main_infra.outputs.bucket_api_develop_name
    "ttl": 15,
    "indexBucket": data.terraform_remote_state.main_infra.outputs.bucket_private_name,
    "indexFile": "trip-index.pb",
    "permitStale": true
  })
}

resource "aws_lambda_permission" "allow_eventbridge_develop" {
  statement_id  = "AllowExecutionFromEventBridgeDevelop"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_gtfsrt.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_develop.arn
}

// Prod schedule

resource "aws_cloudwatch_event_rule" "lambda_schedule_prod" {
  name = "lambda_gtfsrt_schedule_prod"
  description = "trigger lambda gtfsrt every 2 minute for prod"
  state = "DISABLED"

  schedule_expression = "rate(2 minutes)"
}

resource "aws_cloudwatch_event_target" "lambda_target_prod" {
  rule = aws_cloudwatch_event_rule.lambda_schedule_prod.name
  target_id = "SendToLambda"
  arn = aws_lambda_function.lambda_gtfsrt.arn
  input = jsonencode({
    "gtfsrtUrl": "https://transport.api.act.gov.au/gtfs/data/gtfs/v2/trip-updates.pb",
    "destinationBucket": data.terraform_remote_state.main_infra.outputs.bucket_api_prod_name
    "ttl": 4,
    "indexBucket": data.terraform_remote_state.main_infra.outputs.bucket_private_name,
    "indexFile": "trip-index.pb"
  })
}

resource "aws_lambda_permission" "allow_eventbridge_prod" {
  statement_id  = "AllowExecutionFromEventBridgeProd"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_gtfsrt.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.lambda_schedule_prod.arn
}