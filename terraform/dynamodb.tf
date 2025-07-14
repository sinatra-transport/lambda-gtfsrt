resource "aws_dynamodb_table" "gtfsrt_live_prod" {
  name         = "gtfsrt_live_data_prod"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "path"

  attribute {
    name = "path"
    type = "S"
  }
}
