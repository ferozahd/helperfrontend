import React from "react";
import { useState, useEffect } from "react";

import { approvedToken, createUser } from "api/auth";

const ApproveTokenPage = (props) => {
  const authtoken = props.token;

  const [token, setToken] = useState(null);
  const [message, setMessage] = useState();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassworld] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {

    if (authtoken === undefined) return;

    approvedToken({ "token": authtoken })
      .then((response) => {
        if (response.data.token === authtoken) {
          setToken(response.data.token);
        }

      })
      .catch((err) => {
        setMessage(err.response.data.message)
      })
  })


  function approvedHandlar(e) {
    e.preventDefault();
    if (name.length < 4) {
      setError("name should be greater than 4 charecter ")
    } else if (password.length < 8 || password.length > 32) {
      setError("Password should be 8 to 32 charecter")
    } else if (password !== rePassword) {
      setError("Password should be same ")
    } else {
      setError(null)
      createUser({ "token": token, "name": name, "password": password }).then((response) => {
        if (response.data.message !== undefined) {
          setError(response.data.message);
        }
        window.location.pathname = "/auth/login";
      })
    }
  }




  // if get any message then it will not allowed to approved the use then browser just showing the error message 
  if (message != null) {
    return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-cyan-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                {message && <div className=" bg-red-500 text-white w-full py-1 px-2">{message}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }




  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-cyan-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-sm font-bold">
                    Approve your self
                  </h6>
                </div>
                {error && <div className=" text-xs bg-red-500 text-white p-2">{error}</div>}
                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form method="post" onSubmit={approvedHandlar} >
                  <input type="hidden" name="token" defaultValue={token} />
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      onChange={(e) => { setName(e.target.value) }}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => { setPassword(e.target.value) }}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="password"
                    />
                  </div>



                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Re-enter Password
                    </label>
                    <input
                      onChange={(e) => { setRePassworld(e.target.value) }}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="re-password"
                    />
                  </div>



                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white active:bg-cyan-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ApproveTokenPage;
