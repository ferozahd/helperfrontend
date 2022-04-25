import { useParams } from "react-router-dom";
import { getAJobForSeller, applySellerForAJob } from "api/job"
import { useState, useEffect } from "react";


const ApplyJob = () => {
    const [job, setJob] = useState();
    const [isApply, setApply] = useState(true);
    const [letter, setLetter] = useState();
    const [budget, setBudget] = useState();
    const [deadLine, setDeadLine] = useState();
    const [message, setMessage] = useState(null)
    const { jobId } = useParams();
    useEffect(() => {
        getAJobForSeller(jobId)
            .then(res => {
                setJob(res.data);
                setApply(res.data.applyStatus === 1)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [jobId])



    function submithandlar(e) {
        e.preventDefault();

        let data = { "sellerBudget": budget, "sellerDeadline": deadLine, "sellerLetter": letter }
        applySellerForAJob(jobId, data)
            .then((res) => {
                setMessage(res.data.message);
                window.location.reload();
            })
            .catch(err => {
                setMessage(err.response.data)
            })
    }

    if (job === undefined) return <h1>Job loading</h1>
    return (

        <div className=" flex justify-center">
            <div className="w-full lg:w-10/12">
                {job &&


                    <div className="py-2 w-full">
                        <div className="py-2 px-4 text-red-500 font-extrabold text-center">{message ? message : job.applyStatus ? "You already applied for this job" : "Appy for this Job"}</div>
                        {/* <div className="text-xs">{job.createdAt.replace("T", " at ")}</div> */}
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
                            <div>Total Apply {job.applied}</div>
                        </div>

                        <hr className="bg-black h-[2px] my-5 lg:my-2" />
                    </div>

                }

                {isApply === false &&

                    <form onSubmit={submithandlar} className="w-full ">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Cover latter
                                </label>
                                <textarea
                                    onChange={(e) => setLetter(e.target.value)}
                                    rows={3}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                    placeholder="Write impressive letter"
                                ></textarea>
                            </div>

                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">

                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Budget
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
                                    type="number"
                                    onChange={(e) => setBudget(e.target.value)}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    DeadLine
                                </label>
                                <select
                                    onChange={(e) => setDeadLine(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"
                                >
                                    {Array(90).fill(0).map((val, index) => <option key={index} value={index + 1}>{index + 1} days</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex justify-center lg:justify-end">
                            <button
                                className="text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-purple-900"
                                type="submit"
                            >
                                Apply
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>

    )
}
export default ApplyJob;