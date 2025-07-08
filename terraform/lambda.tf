module "lambda_gtfsrt" {
  source = "terraform-aws-modules/lambda/aws"
  function_name = "gtfsrt"
  handler = "bootstrap"
  runtime = "provided.al2023"
  create_package         = false
  local_existing_package = "./bootstrap.zip"

  logging_log_group = "/aws/lambda/gtfsrt-rs"

  create_role = false
  lambda_role = aws_iam_role.lambda_role.arn

  memory_size = 256
  timeout = 60
  architectures = ["arm64"]

  layers = [
    // AWS secrets layer
    "arn:aws:lambda:ap-southeast-2:665172237481:layer:AWS-Parameters-and-Secrets-Lambda-Extension-Arm64:18"
  ]

  depends_on = [
    aws_iam_role_policy_attachment.lambda_logs,
    aws_cloudwatch_log_group.cloudwatch_gtfsrt
  ]
}