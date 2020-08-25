import './App.css';
import React, { Fragment } from 'react';
import MockStyle from './components/MockStyle'
import {uploadPicture} from './components/API'


import { CameraFeed } from './components/Camera-feed'
const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);
uploadPicture(file)
// axios.post('url_from_flask', formData,{
//   headers: {
//     'Content-type': 'multipart/form-data'
//   }
// })
}

function App() {
  return (
    <div className="App">
      <MockStyle/>
    <h1>Image capture test</h1>
    <p>Capture image from camera (and upload to form)</p>
    <CameraFeed sendFile={uploadImage} />
</div>
  );
}

export default App;
