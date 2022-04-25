import { useState, useEffect } from 'react'
import Pagination from "components/pagination/Pagination"
import { getAvaJob } from 'api/job'
import { Link } from 'react-router-dom';
const IndexPage = () => {

    const [jobs, setJobs] = useState();
    const [page, setPage] = useState(0);
    useEffect(() => {
        getAvaJob(page)
            .then(response => {
                setJobs(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }, [page])

    if (jobs === undefined) return <></>;

    return (

        <div>
            <div className="block w-full overflow-x-auto px-3">
                {jobs.content.map((job) => {
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
                                <div>Total Apply {job.applied}</div>
                            </div>
                            <div className="w-full flex lg:justify-end justify-center py-2 lg:py-0">
                                <Link to={`/job/seller/apply/${job.id}`}>
                                    <button
                                    className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    >Preview & Apply</button>
                                </Link>
                            </div>




                            <hr className="h-[2px]  bg-black" />
                        </div>
                    )
                })}
                <Pagination data={jobs} setActivepage={setPage} />

            </div>
        </div>
    )
}
export default IndexPage;