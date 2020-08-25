import './App.css';
import React, { Fragment } from 'react';
import MockStyle from './components/MockStyle'
import {uploadPicture} from './components/API'
import { CameraFeed } from './components/Camera-feed'
import CameraFeedNew from './components/CameraFeedNew'
import CameraFeedNewest from './components/CameraFeedNewest'


const uploadImage = async file => {
  const formData = new FormData();
  formData.append("image", file, "image.png");
uploadPicture(formData)

// const uploadImage = (file) => {
//   const formData = new FormData();
//   formData.append("image", file, "image.png");
//   uploadPicture(formData);
// axios.post('url_from_flask', formData,{
//   headers: {
//     'Content-type': 'multipart/form-data'
//   }
// })
}

export default function App() {
  return (
    <div className="App">
      <h1>simple option, but yet good</h1>
<CameraFeedNew/>
<h1>nice solution with all the props</h1>
<CameraFeedNewest/>
      <MockStyle/>
    <h1>Image capture test</h1>
    <p>Capture image from camera (and upload to form)</p>
    <CameraFeed sendFile={uploadImage} />
</div>
  );
}
