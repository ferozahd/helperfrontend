import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "components/pagination/Pagination";

import { getPendignJobs } from "api/job";

export default function CardTable() {
    const [pendingJobs, setPendingJobs] = useState(null);
    const [pendignPage, setPendignPage] = useState(0);

    
    useEffect(() => {
        getPendignJobs(pendignPage)
            .then((res) => {
                if (res.data.length !== 0) {
                    setPendingJobs(res.data);
                    console.log(res.data)
                }
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [pendignPage])



    return (
        <>

            <div>
                <Link to="/buyer/job/create">
                    <button className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">Create a Job</button>
                </Link>
            </div>

            {pendingJobs &&
                <div className="relative flex mt-7 border-2 flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " >

                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-lg text-gray-700"           >
                                    Pending Job
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto px-3">
                        {pendingJobs.content.map((job) => {
                            return (
                                <div key={job.id} className="py-2">
                                    <div className="text-xs">{job.createdAt.replace("T", " at ")}</div>
                                    <div className="pl-3 py-3">{job.description}</div>
                                    <div className="inline-flex items-center">
                                        <div className="uppercase text-xs inline-flex mr-3">Budget</div>
                                        {job.budget}

                                        <div className="ml-3 rounded-full px-2 bg-red-200">{job.jobDuration} days</div>

                                        <div className="px-2 text-gray-800 ml-3 rounded-full bg-gray-200 font-serif">{job.typename}</div>
                                    </div>
                                    <div className="inline-flex pt-2 w-full ">
                                        <div className="pr-3">{job.country}</div>
                                        <div className="px-4">{job.city}</div>
                                        <Link to={`/buyer/job/applicant/${job.id}`}>
                                            <div 
                                             className="py-1 px-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm  text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900"
                                            >Total Apply {job.applied}</div>
                                        </Link>
                                    </div>




                                    <hr className="h-[2px]  bg-black" />
                                </div>
                            )
                        })}
 <Pagination data={pendingJobs} setActivepage={setPendignPage}/>
                        
                    </div>
                </div>
            }



            <div className="relative flex mt-7 border-2 flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-gray-700"           >
                                Running Job
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Project
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Budget
                                </th>

                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Status
                                </th>

                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Create
                                </th>

                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Deadline
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-green-200 text-gray-700 border-sky-700">
                                    Action
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                                    Home cleaning
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                    $250 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                    ongoing
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                    2022/January/20
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                    2022/March/20
                                </td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                    <button>Action</button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
}

