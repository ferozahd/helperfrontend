import React, { useState } from "react";
import { updatemyprofile } from "api/user";

export default function CardSettings(props) {
  const [editionmode, setEditionmode] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState(props.profiledata);

  function handleSetting(e) {
    e.preventDefault();
    if (formdata.fullname == null) {
      setError("Name should not be null")
    } else if (formdata.fullname.length < 4 || formdata.fullname.length > 80) {
      setError("Name charecter should be 4 to 80 ");
    } else {
      setError(null)

      const data = {
        "aboutme": formdata.aboutme,
        "city": formdata.city,
        "address": formdata.address,
        "phonenumber": formdata.phonenumber,
        "country": formdata.country,
        "fullname": formdata.fullname,
        "postalcode": formdata.postalcode

      }


      updatemyprofile(data)
        .then((response) => {
          if (response.status === 200 && response.data === true) {
            window.location.reload();
          }
        }).catch((err) => {
          setError(err.response.data.message)
        })


    }
  }


  return (
    <>
      <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${editionmode === true ? 'bg-red-200' : 'bg-sky-100'} border-0`}>
        <div className="rounded-t bg-white mb-0 px-6 py-6">

          <div className="text-center flex justify-between">
            <h6 className="text-gray-700 text-xl font-bold">{editionmode === true ? <>Modify Your Account</> : <>My Account</>}</h6>
            <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setEditionmode(!editionmode)}
            >
              Settings {editionmode === true ? <>ON</> : <>OFF</>}
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          {(editionmode === true && error != null) &&
            <div className="w-full inline-flex justify-center py-2 bg-red-500 mt-2 font-bold text-gray-200">{error}</div>

          }

          <form onSubmit={handleSetting}>
            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address[not acceptable new email now]
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.email}

                    readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.fullname}
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "fullname": e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    phone Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.phonenumber}
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "phonenumber": e.target.value })}
                  />
                </div>
              </div>

            </div>

            <hr className="mt-6 border-b-1 border-gray-300" />

            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.address}
                    placeholder="Please give you current city name in edit mode"
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "address": e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.city}
                    placeholder="Please give you current city name in edit mode"
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "city": e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.country}
                    placeholder="Please give you country name in edit mode"
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "country": e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formdata.postalcode}
                    placeholder="Please give you post code in edit mode"
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                    onChange={(e) => setFormdata({ ...formdata, "postalcode": e.target.value })}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-300" />

            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                {/* {editionmode === true &&
                  <div className="bg-sky-500  text-white active:bg-sky-600 font-bold   px-4 py-2 rounded shadow hover:shadow-md inline-flex items-center outline-none focus:outline-none mr-1 ease-linear transition-all duration-100">
                    <fa.FaUser className="mr-2" /> <label htmlFor="profilePicture" onClick={() => { document.getElementById("profilepicture").click() }} >
                      Select profile picture
                    </label>
                    <input accept="image/*" type="file" onChange={(e) => setPicture(e.target.files[0])} className=" hidden" id="profilepicture" />

                  </div>
                } */}
                <div className="relative w-full mb-3 mt-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                    rows="4"
                    placeholder="Write something about your self"
                    defaultValue={formdata.aboutme}
                    onChange={(e) => setFormdata({ ...formdata, "aboutme": e.target.value })}
                    readOnly={`${editionmode === true ? "" : "readOnly"}`}
                  ></textarea>
                </div>
              </div>

              {/* Save the record if editable mode on */}
              {editionmode === true &&
                <div className="w-full inline-flex justify-end">
                  <button className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">Save</button>
                </div>
              }


            </div>
          </form>
        </div>
      </div>
    </>
  );
}
