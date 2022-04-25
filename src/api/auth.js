import http from "./http";


async function registration(data){
    return await http.post('/auth/registration/', data)
}
async function approvedToken(data){
    return await http.post('/auth/approved/', data)
}
async function createUser(data){
    return await http.post('/auth/createuser/', data) 
}
async function login(data){
    return await http.post('/auth/login/', data) 
}


function loginImplements(response){ 
    localStorage.setItem("token",response.token)
    // localStorage.setItem("id",id);
    window.location.reload()
}
function logoutImplements(){
    localStorage.clear();
    window.location.reload();
}
function isLogin(){
    return (localStorage.getItem('token')!=null)
}
function getToken(){
    return localStorage.getItem('token');
}


export { registration,approvedToken,createUser,login,loginImplements,logoutImplements,isLogin,getToken}