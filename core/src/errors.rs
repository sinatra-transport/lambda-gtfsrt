use std::error::Error;
use std::fmt;

#[derive(Debug, Clone)]
pub struct MissingSecretError {
    pub(crate) name: String
}

impl Error for MissingSecretError {}

impl fmt::Display for MissingSecretError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "missing secret of name '{}'", self.name)
    }
}