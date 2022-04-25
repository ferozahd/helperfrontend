import axios from "axios";
import http from './http'

async function uploadProfilePicture(file) {
  let formData = new FormData();
  formData.append("picture",file);

    return axios.patch("http://localhost:5000/user/mypicture/", formData, {
      headers: {
        "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      }
    });
  }



async function getMe() {
    return axios.get('http://localhost:5000/user/getme')
}

async function updatemyprofile(data) {
  return axios.patch('http://localhost:5000/user/updateme/', data)
}
async function getBuddyList(pageKey) {
  return axios.get('http://localhost:5000/user/buddylist/'+pageKey)
}

export { getMe, updatemyprofile,uploadProfilePicture,getBuddyList }

