resource "aws_lambda_function" "lambda_gtfsrt" {
    function_name = "gtfsrt"
    s3_bucket = data.terraform_remote_state.main_infra.outputs.bucket_lambda_arn
    s3_key = "lambda-gtfsrt.zip"
    role = aws_iam_role.lambda_role
    handler = "index.handler"
    runtime = "nodejs22.x"

    memory_size = 128
    architectures = [ "x86_64" ]

    depends_on = [
        aws_iam_role_policy_attachment.lambda_logs,
        aws_cloudwatch_log_group.cloudwatch_gtfsrt,
    ]
}