import { S3Client } from "@aws-sdk/client-s3";
// Set the AWS Region
const REGION = "eu-north-1";
// Create an Amazon S3 service client object
const myS3Client = new S3Client({region: REGION});
export {myS3Client};