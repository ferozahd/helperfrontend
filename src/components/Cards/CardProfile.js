import React from "react";
import * as fa from 'react-icons/fa'
import { uploadProfilePicture } from "api/user";

export default function CardProfile(props) {
  const profiledata = props.profiledata;

  function updatePictureHandlar(e) {
    if (e.target.files !== null) {

      uploadProfilePicture(e.target.files[0])
      .then((response)=>{
       if(response.status===200){
         window.location.reload();
       }
      })
    }
  }
  return (
    <>
      <div className="relative flex flex-col min-h-[240px]  min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div onMouseEnter={() => { window.document.getElementById("changeprofilepicture").style.height = "60px" }} onMouseLeave={() => { window.document.getElementById("changeprofilepicture").style.height = "0px" }} className="absolute h-44 w-44  bg-red-400 bg-cover overflow-hidden rounded-full -top-28 " style={{ backgroundImage: "url(" + profiledata.profilepicture + ")" }} >
                <label htmlFor="selectprofilepicture" id="changeprofilepicture" className="absolute h-0 hover:bg-orange-400 cursor-pointer duration-500 w-44 flex justify-center items-center font-bold text-gray-100 bg-pink-400 bottom-0">
                  Upload
                </label>
                <input type="file" id="selectprofilepicture" onChange={updatePictureHandlar} accept="image/*" className="hidden" />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-16">





              {/*            
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                    22
                  </span>
                  <span className="text-sm text-gray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                    10
                  </span>
                  <span className="text-sm text-gray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                    89
                  </span>
                  <span className="text-sm text-gray-400">Comments</span>
                </div>
              </div> 
              */}






            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-700 mb-2">
              {profiledata.fullname}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
              {profiledata.city} , {profiledata.country}
            </div>
            <div className="mb-2 text-gray-600 mt-2">
              {profiledata.email}
            </div>           
             <div className="mb-2 text-gray-600 mt-2">
              {profiledata.phonenumber&&<>{profiledata.phonenumber}</>}
            </div>

          </div>
          <div className="mt-10 py-10 border-t border-gray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  {profiledata.aboutme}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
