import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { FileSpec } from "./models.js";
import { Buffer } from "node:buffer";

export class Uploader {

    async upload(
        s3: S3Client,
        spec: FileSpec,
        bucket: string
    ) {
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