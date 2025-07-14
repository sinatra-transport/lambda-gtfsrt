use std::error::Error;
use aws_sdk_dynamodb as dynamodb;
use aws_sdk_dynamodb::types::AttributeValue;
use aws_sdk_s3::primitives::Blob;
use gtfsrt_processor_core::models::FileSpec;
use gtfsrt_processor_core::uploader::Uploader;

#[derive(Clone)]
pub struct DynamoDBUploader {
    table: String,
    client: dynamodb::Client
}

impl DynamoDBUploader {
    pub fn new(table: &str, client: dynamodb::Client) -> Self {
        Self {
            table: table.to_string(),
            client
        }
    }
}

#[async_trait::async_trait]
impl Uploader for DynamoDBUploader {
    async fn upload(&self, spec: FileSpec) -> Result<(), Box<dyn Error + Send + Sync>> {
        self.client
            .put_item()
            .table_name(self.table.clone())
            .item("path", AttributeValue::S(spec.key))
            .item("contents", AttributeValue::B(Blob::from(spec.contents)))
            .send().await?;

        Ok(())
    }

    fn box_clone(&self) -> Box<dyn Uploader + Send + Sync> { Box::new(self.clone()) }
}