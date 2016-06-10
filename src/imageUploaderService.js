import axios from 'axios';


export const uploadImage = (file) => {
  let formData = new FormData();
  formData.append('image', file);

  var options = {
    headers: {
      'Content-Type': file.type
    },
    baseURL: 'http://localhost:3000/api/v1'
  };

  axios.post('/upload', formData, options)
    .then((res) => console.log(res.data));

}