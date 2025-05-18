import { PutObjectCommand, PutObjectRequest, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { FileSpec } from "./models.js";

export class Uploader {

    async upload(
        spec: FileSpec,
        bucket: string
    ) {
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        });
        const blob = new Blob([spec.contents]);

        const command = new PutObjectCommand(<PutObjectRequest>{
            Bucket: bucket,
            Key: spec.key,
            Body: blob.stream(),
            ContentType: spec.mimeType,
        });

        await s3.send(command)
    }

}