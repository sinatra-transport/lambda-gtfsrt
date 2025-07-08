terraform { 
  cloud { 
    organization = "sinatra" 
    workspaces { 
      name = "lambda-gtfsrs" 
    } 
  } 

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

data "terraform_remote_state" "main_infra" {
  backend = "remote"

  config = {
    organization = "sinatra"
    workspaces = {
      name = "production"
    }
  }
}