/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import * as fa from 'react-icons/fa'

export default function SellerSidebar(props) {
    
    const setCollapseShow=props.setSideColaps;
    const collapseShow=props.sideColaps;

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-20 bg-white  sm:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-50 sm:px-0 md:px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
     
                    <div  className={"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +collapseShow}>
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        Notus React
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <fa.FaTimes />
                                    </button>
                                </div>
                            </div>
                        </div>
       

                        <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Seller Dashboard
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 flex items-center font-bold  " +
                                        (window.location.href.indexOf("/seller/setting") !== -1
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-gray-700 hover:text-gray-500")
                                    }
                                    to="/seller/setting"
                                >
                         <fa.FaWrench className="text-md opacity-75 mr-1"/>
                                    Setting
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 flex items-center font-bold block " +
                                        (window.location.href.indexOf("/seller/jobs") !== -1
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-gray-700 hover:text-gray-500")
                                    }
                                    to="/seller/jobs"
                                >
                          <fa.FaShoppingBag className="text-md opacity-75 mr-1"/>
                              
                                    Jobs
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 flex items-center font-bold  " +
                                        (window.location.href.indexOf("/seller/accounts") !== -1
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-gray-700 hover:text-gray-500")
                                    }
                                    to="/seller/accounts"
                                >
                           <fa.FaDollarSign className="text-md opacity-75 mr-1"/>
                                    Accounts
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
