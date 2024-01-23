import S3FileUpload from 'react-s3';
import { Buffer } from 'buffer'; if (!window.Buffer) {   window.Buffer = Buffer; }
window.Buffer = window.Buffer || require("buffer").Buffer;



const uploadFile = async(file)=>{
    const config = {
      bucketName: import.meta.env.VITE_APP_BUCKET_AWS,
      region: import.meta.env.VITE_APP_REGION_AWS,
      accessKeyId: import.meta.env.VITE_APP_KEY_AWS,
      secretAccessKey: import.meta.env.VITE_APP_SECRET_KEY_AWS,
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


  