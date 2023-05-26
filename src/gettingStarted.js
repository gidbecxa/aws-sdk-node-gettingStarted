import { CreateBucketCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { myS3Client } from "./libs/sampleClient.js"

const params = {
    Bucket: "new-example-bucket-103",
    Key: "sample_upload_text.txt",
    Body: "Creating my first AWS S3 object from code!",
}

const run = async () => {
    // Let's create an AWS S3 bucket
    try {
        const data = await myS3Client.send(
            new CreateBucketCommand({ Bucket: params.Bucket })
        );
        console.log('Data:', data);
        console.log("Successfully created a bucket called ", data.Location);
        // return data; // For unit tests
    } catch (err) {
        console.log("Error", err);
    }

    // Now to creating an object and upload it to the Amazon S3 bucket
    try {
        const results = await myS3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" + params.Key
        );
        // return results; // For unit tests
    } catch (err) {
        console.log("Error", err);
    }
};
run();