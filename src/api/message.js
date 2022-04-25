import axios from "axios";

async function getMessage(userId, page) {
    return axios.get("http://localhost:5000/message/get/" + userId + "/" + page);
}
async function postMessage(userId, messageBody) {
    return axios.post("http://localhost:5000/message/send/" + userId , {"messageBody":messageBody});
}

export {
    getMessage,
    postMessage
}