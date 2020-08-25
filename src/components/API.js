import axios from 'axios'

const baseUrl = {}

export async function uploadPicture(file) {
  const response = await axios.post(`${baseUrl}/productpicture`, file);
  const productData = await response.data
  return productData
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