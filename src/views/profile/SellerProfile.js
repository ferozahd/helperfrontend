import { useParams } from "react-router-dom";
import { getSeller } from "api/buyer"
import { useState, useEffect } from "react";
import * as Fa from "react-icons/fa"
import { Link } from "react-router-dom";

const SellerProfile = (props) => {
    const { userId } = useParams();
    const [seller, setSeller] = useState(null);

    useEffect(() => {
        getSeller(userId).then(res => {
            if (res.status === 200) {
                setSeller(res.data)
            } else {
                setSeller(null);
            }
        })
            .catch(err => console.log(err.response))
    }, [])
    if (seller == null) return <h1>Loading</h1>
    console.log(seller)

    return (

        <div className="bg-gray-100">
            <div className="container mx-auto my-5 p-5 ">
                <div className="lg:flex block no-wrap  md:-mx-2 ">

                    <div className="w-full lg:max-w-sm  md:mx-2 shadow-2xl">
                        <div className="p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden w-full flex justify-center">
                                <div style={{ backgroundImage: "url(" + seller.photo + ")" }}
                                    className=" h-44 w-44 bg-cover rounded-full"
                                >
                                </div>

                            </div>
                            <div className="flex justify-between items-center">
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{seller.username && seller.username}</h1>
                                <div>
                                    <Link to={"/chat/user/" + seller.id}>
                                        <Fa.FaEnvelope className="h-8 w-8 text-blue-400 hover:text-green-500" />
                                    </Link>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{seller.aboutme && seller.aboutme}</p>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto"><span
                                        className={`${seller.enabled === true ? 'bg-green-500' : 'bg-gray-500'} py-1 px-2 rounded text-white text-sm`}>{seller.enabled === true ? "Active" : "Deactive"}</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">{seller.createdAt}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="my-4"></div>
                        <div className="bg-white p-3 hover:shadow">
                            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                {/* Logo */}
                                <span>Skilles and Qualifications</span>
                            </div>
                            <div className="grid grid-cols-3">

                            </div>
                        </div>
                    </div>
                    <div className="w-full  mx-2 h-64">
                        <div className=" p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid xl:grid-cols-2 grid-cols-1 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Name</div>
                                        <div className="px-4 py-2">{seller.name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        {/* <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">Doe</div> */}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Country</div>
                                        <div className="px-4 py-2">{seller.country}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">City</div>
                                        <div className="px-4 py-2">{seller.city}</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="my-4"></div>

                        <div className="bg-white p-3 shadow-sm rounded-sm">

                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Review</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    {/* <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li> */}
                                </ul>
                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default SellerProfile;