resource "null_resource" "install_node" {
  triggers = {
    build_number = "${timestamp()}"
  }
  provisioner "local-exec" {
    command = <<-EOF
      mkdir ../node_install &&\
      cd ../node_install &&\
      curl https://nodejs.org/dist/v22.11.0/node-v22.11.0-linux-arm64.tar.gz | tar xz --strip-components=1
    EOF
  }
}

resource "null_resource" "npm_install_function" {
    depends_on = [null_resource.install_node]

    triggers = {
        build_number = "${timestamp()}"
    }
    provisioner "local-exec" {
        command = <<-EOF
        export PATH="$PWD/node_install/bin:$PATH" &&\
        cd ../ &&\
        npm install --no-bin-links
        npm build
        cp -r node_modules dist/node_modules
        EOF
    }
}

data "archive_file" "lambda_function_archive" {
  depends_on = [null_resource.npm_install_function]
  type = "zip"
  source_dir  = "${path.module}/../dist"
  output_path = "${path.module}/gtfsrt.zip"
}

resource "aws_s3_object" "lambda_function_object" {
  bucket = data.terraform_remote_state.main_infra.outputs.bucket_lambda_arn

  key    = "gtfsrt.zip"
  source = data.archive_file.lambda_function_archive.output_path

  etag = data.archive_file.lambda_function_archive.output_md5
}
