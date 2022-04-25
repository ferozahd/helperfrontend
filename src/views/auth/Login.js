import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { login, loginImplements } from "api/auth";

export default function Login() {
  // const route = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, [5000])
  }, [error])

  function loginHandlar(e) {
    e.preventDefault();
    if (username.length < 6) {
      setError("Type your username correctly")
    } else if (password.length < 8) {
      setError("Type your password correctly")
    }
    if (error === null) {
      login({ username: username, password: password }).then((response) => {
        loginImplements(response.data)
      }).catch((err) => {
        setError(err.response.data.message)
      })
    }



  }



  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center ">
                  <h6 className="text-gray-500 text-sm font-bold">
                    Sign in
                  </h6>
                </div>

                {error && <div className="w-full py-1 px-2 text-sm text-white bg-red-500 font-semibold">{error}</div>}

                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={loginHandlar}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
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

                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>

                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">

                <small className="text-emerald-200">Forgot password?</small>

              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register">

                  <small className="text-emerald-200">Create new account</small>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

