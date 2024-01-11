import S3FileUpload from 'react-s3';
import { Buffer } from 'buffer'; if (!window.Buffer) {   window.Buffer = Buffer; }
window.Buffer = window.Buffer || require("buffer").Buffer;



const uploadFile = async(file)=>{
    const config = {
      bucketName: 'upsnet2',
      //dirName: 'proyectos', /* optional */
      region: 'us-east-1',
      accessKeyId: 'AKIAQRCVFIP2ZR7NQFPT',
      secretAccessKey: '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',
    }
    ///file.name = 'pre_abonos (2).txt'
    console.log(file);
    await S3FileUpload.uploadFile(file, config)
    .then((data)=>{
      console.log(data);
    }).catch((err)=>{
      alert(err);
    })
  }


  export default uploadFile