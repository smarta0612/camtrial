import axios from 'axios'

const baseUrl = 

export function uploadPicture(file) {
    return axios.post(`${baseUrl}/productpicture`, file);
  }

export function uploadPictureTwo(file){
return axios.post(`${baseUrl}/productpicture`, file, {
    headers: {
           'Content-type': 'multipart/form-data'
         } 
})  }

  // axios.post('url_from_flask', formData,{
//   headers: {
//     'Content-type': 'multipart/form-data'
//   }
// })