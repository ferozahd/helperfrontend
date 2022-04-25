
import React, { useState } from 'react'
import ProfileLogs from "components/Dropdowns/ProfileLogs";
import ChatLogs from "components/Dropdowns/ChatLogs";
import * as fa from 'react-icons/fa'
import { Link } from 'react-router-dom';



const IndexNavbar = (props) => {

  const me = props.me;
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            
            
            <div className="sm:block md:hidden ">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => props.setSideColaps("bg-white m-2 py-3 px-6")}
              >

                <fa.FaBars />
              </button>
            </div>


            <Link to="/">
              <div
                className="text-gray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"

              >
                Helper
              </div>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >

              <fa.FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >



            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">

              </li>
            </ul>


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">



              <li className="flex items-center ">

                <span className="relative ">
                  <fa.FaBell className=" text-2xl" />

                  {me.hangedNotification !== 0 &&
                    <span className="absolute w-2 h-2 top-0 right-0 rounded-full bg-red-500 text-red-500"></span>
                  }
                </span>
              </li>

              <li className="flex items-center px-4 ">

                <ChatLogs data={me.hangedMessage} />

              </li>

              <li className="flex items-center">
                <ProfileLogs data={me} />
              </li>
            </ul>
          </div>
        </div>


      </nav>
    </>
  );
}
export default IndexNavbar;