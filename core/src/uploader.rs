use crate::models::FileSpec;
use aws_sdk_s3 as s3;
use aws_sdk_s3::primitives::ByteStream;

#[async_trait::async_trait]
pub trait Uploader: Send + Sync {
    async fn upload(&self, spec: FileSpec) -> Result<(), Box<dyn std::error::Error + Send + Sync>>;

    fn box_clone(&self) -> Box<dyn Uploader + Send + Sync>;
}

#[derive(Clone)]
pub struct S3Uploader {
    bucket: String,
    client: s3::Client
}

impl S3Uploader {
    pub fn new(
        bucket: &str,
        client: s3::Client
    ) -> Self {
        Self {
            bucket: bucket.to_string(),
            client
        }
    }
}

#[async_trait::async_trait]
impl Uploader for S3Uploader {
    async fn upload(&self, spec: FileSpec) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
        self.client.put_object()
            .bucket(self.bucket.as_str())
            .key(spec.key.as_str())
            .content_type(spec.mime_type.as_str())
            .body(ByteStream::from(spec.contents))
            .send()
            .await?;

        println!("Uploaded {}", spec.key);
        Ok(())
    }

    fn box_clone(&self) -> Box<dyn Uploader + Send + Sync> {
        Box::new(self.clone())
    }
}

impl Clone for Box<dyn Uploader + Send + Sync> {
    fn clone(&self) -> Box<dyn Uploader + Send + Sync> {
        self.box_clone()
    }
}