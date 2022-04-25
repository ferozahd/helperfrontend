import axios from "axios";

async function getSeller(sellerId){
    return await axios.get(`http://localhost:5000/buyer/seller/profile/${sellerId}`)
}


export {getSeller}