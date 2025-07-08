use std::error::Error;
use gtfsrt_processor_core::secrets::Secrets;

#[derive(Debug, serde::Serialize, serde::Deserialize)]
#[serde(rename_all="PascalCase")]
struct ParameterStoreResponse {
    parameter: ParameterStoreResponseParameter
}

#[derive(Debug, serde::Serialize, serde::Deserialize)]
#[serde(rename_all="PascalCase")]
struct ParameterStoreResponseParameter {
    value: String
}

pub struct LayerParameterStoreSecrets {
    client: reqwest::Client
}

impl LayerParameterStoreSecrets {
    pub fn new(client: reqwest::Client) -> Self {
        Self { client }
    }
}

#[async_trait::async_trait]
impl Secrets for LayerParameterStoreSecrets {
    async fn secret(&self, name: &str) -> Result<String, Box<dyn Error>> {
        let response = self.client.get(
            reqwest::Url::parse_with_params(
                &"http://localhost:2773/systemsmanager/parameters/get",
                &[("name", name)]
            )?
        ).header(
            "X-Aws-Parameters-Secrets-Token",
            std::env::var("AWS_SESSION_TOKEN")?
        ).send().await?.json::<ParameterStoreResponse>().await?;

        Ok(response.parameter.value)
    }
}