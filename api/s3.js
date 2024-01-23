import aws from 'aws-sdk';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { promisify } from 'util';

dotenv.config();

const randomBytes = promisify(crypto.randomBytes);

const region = "us-east-1"
const bucketName = "code-nest"
const accessKeyId = "AKIAQRCVFIP23TMFQUHE"
const secretAccessKey = "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"

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4"
})

const generateSignedUrl = async () => {
    const bytes = await randomBytes(16);
    const imageName = bytes.toString('hex') + '.zip'; // Asegura que siempre tenga extensión ".png"
    //const imageName = bytes.toString('hex'); // Asegura que siempre tenga extensión ".png"


    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const signedUrl = await s3.getSignedUrlPromise('putObject', params);
    console.log("URL de AWS  :",signedUrl)
    return signedUrl;
}

export default generateSignedUrl;
