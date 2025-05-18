resource "aws_s3_object" "lambda_function_object" {
  bucket  = data.terraform_remote_state.main_infra.outputs.bucket_lambda_arn
  key     = "lambda-gtfsrt.zip"
  content = data.local_file.lambda_function_archive.content
  etag    = data.local_file.lambda_function_archive.content_md5
}

data "local_file" "lambda_function_archive" {
  filename = "${path.module}/lambda-gtfsrt.zip"
}
