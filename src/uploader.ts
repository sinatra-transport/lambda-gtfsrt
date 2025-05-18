import { PutObjectCommand, PutObjectRequest, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { FileSpec } from "./models.js";
import { Buffer } from "node:buffer";

export class Uploader {

    async upload(
        spec: FileSpec,
        bucket: string
    ) {
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        });
        const buffer = Buffer.from(spec.contents);

        const command = new PutObjectCommand({
            Bucket: bucket,
            Key: spec.key,
            Body: buffer,
            ContentType: spec.mimeType,
        });

        await s3.send(command);
    }

}