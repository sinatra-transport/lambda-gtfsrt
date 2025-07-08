use std::error::Error;
use aws_sdk_ssm as ssm;
use async_trait::async_trait;
use crate::errors::MissingSecretError;

#[async_trait]
pub trait Secrets {
    async fn secret(&self, name: &str) -> Result<String, Box<dyn Error>>;
}

pub struct ParameterStoreSecrets {
    client: ssm::Client
}

impl ParameterStoreSecrets {
    pub fn new(client: ssm::Client) -> Self {
        Self { client }
    }
}

#[async_trait]
impl Secrets for ParameterStoreSecrets {
    async fn secret(&self, name: &str) -> Result<String, Box<dyn Error>> {
        let err = || Box::new(
            MissingSecretError { name: name.to_string() }
        ) as Box<dyn Error>;

        println!("Fetching secret {}", name);

        self.client.get_parameter().name(name.to_string()).send()
            .await?
            .parameter.ok_or_else(err)?
            .value.ok_or_else(err)
    }
}