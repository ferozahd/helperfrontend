import axios from "axios";

async function getJobCatagories(){
    return axios.get("http://localhost:5000/job/catagories");
}


async function getJobSubCatagories(catagoriesid){
    return axios.get(`http://localhost:5000/job/${catagoriesid}/subcatagories`);
}


async function getJobTypes(catagoriesid,subcatagoriesid){
    return axios.get(`http://localhost:5000/job/${catagoriesid}/${subcatagoriesid}/type`);
}

async function getPendignJobs(pagenumber){
    return axios.get(`http://localhost:5000/job/buyer/pendingjob/${pagenumber}`);
}

async function createJob(data){
    return axios.post(`http://localhost:5000/job/buyer/create`,data);
}

// This avarage job for seller Who get it without any shorting
async function getAvaJob(pagenumber){
    return axios.get(`http://localhost:5000/job/seller/getavaragejob/${pagenumber}`)
}

async function applySellerForAJob(jobId,data){
    return axios.post(`http://localhost:5000/job/seller/apply/${jobId}`,data);
}

async function getAJobForSeller(jobId){
    return axios.get(`http://localhost:5000/job/seller/getjob/${jobId}`);
}

async function getBuyerApplicants(jobId){
    return axios.get(`http://localhost:5000/job/buyer/getapplicant/${jobId}`);
}




export  {
    getJobCatagories,
    getJobSubCatagories,
    getJobTypes,
    createJob,
    getPendignJobs,
    getAvaJob,
    applySellerForAJob,
    getAJobForSeller,
    getBuyerApplicants
}