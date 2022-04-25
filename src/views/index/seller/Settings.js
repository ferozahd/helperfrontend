import React,{useState} from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings(props) {
  const profiledata=props.profiledata;

  return (
    <>
      <div className="relative h-48 bg-sky-600 md:h-64 bg-[url('http://localhost:5000/file/get/cover.jpg')] bg-cover" >

      </div>
      <div className="flex flex-wrap">

        <div className="w-full order-2  sm:order-2 lg:order-1 lg:w-8/12 px-4">
          <CardSettings profiledata={profiledata} />
        </div>
        <div className="w-full order-1 sm:order-1 lg:order-2 lg:w-4/12 px-4">
          <CardProfile profiledata={profiledata}  />
        </div>
      </div>
    </>
  );
}
