# resource "aws_s3_object" "lambda_function_object" {
#   bucket = data.terraform_remote_state.main_infra.outputs.bucket_lambda_arn

#   key    = "gtfsrt.zip"
#   source = data.archive_file.lambda_function_archive.output_path

#   etag = data.archive_file.lambda_function_archive.output_md5
# }
