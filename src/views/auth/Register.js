import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "api/auth";

export default function Register() {


  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [usertype, setUsertype] = useState();
  const [message, setMessage] = useState();


  function registerHandlar(e) {
    e.preventDefault();

    let data = { "username": username.toLowerCase(), "email": email, "usertype": usertype }
    registration(data).then((response) => {
      setMessage(response.data.message);
      setTimeout(() => { window.location.pathname = "/auth/login" }, 2000)
    }).catch((err) => {
      setMessage(err.response.data.message);
      setTimeout(() => { setMessage(null) }, 2000)
    })

  }



  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-sm font-bold">
                    Sign up
                  </h6>
                </div>

                {message && <div className=" bg-red-500 text-white w-full py-1 px-2">{message}</div>}




                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form method="post" onSubmit={registerHandlar}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                      <div className=" text-xs font-semibold text-red-400">this is your identity and should be unique</div>
                    </label>
                    <input
                      onChange={(e) => { setUsername(e.target.value) }}
                      type="text"
                      className="border-0 lowercase px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => { setEmail(e.target.value) }}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>



                  <div >
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="sellercheck"
                        type="radio"
                        name="usertype"
                        value="SELLER"
                        onChange={() => setUsertype("SELLER")}
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        SELLER
                        <a
                          href="#pablo"
                          className="text-sky-500"
                          onClick={(e) => e.preventDefault()}
                        >

                        </a>
                      </span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="buyercheck"
                        type="radio"
                        name="usertype"
                        value="BUYER"
                        onChange={() => setUsertype("BUYER")}
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        Buyer
                        <a
                          href="#pablo"
                          className="text-sky-500"
                          onClick={(e) => e.preventDefault()}
                        >
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">

              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login">
                  <a href="#pablo" className="text-blue-200">
                    <small>Do you have an account</small>
                  </a>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

