
import React from "react";
import "./TrustedBy.scss";

const images_data = [
  { id_key: 1, alt: 'react', src: 'https://icon-library.com/images/react-icon/react-icon-29.jpg' }, 
  { id_key: 2, alt: 'hostinger', src: 'https://icons-for-free.com/download-icon-Hostinger-1329545820965555584_512.png'}, 
  { id_key: 3, alt: 'mongo-db', src: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png' },
  { id_key: 4, alt: 'ups', src: 'https://www.ups.edu.ec/documents/20121/77326/Isotipo+Original.png/48fb2ada-b4e7-09df-b45a-884cda62cc9b?version=1.0&t=1620746533255&imagePreview=1'}
];
const frame_images = [];

images_data.forEach( ({ id_key, alt, src }) => {
  frame_images.push(
    <img key={ id_key } src={src} alt={ alt } />
  );
})

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Powered by:</span>
        { frame_images }
      </div>
    </div>
  );
};

export default TrustedBy;