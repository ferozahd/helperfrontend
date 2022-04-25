import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/";

import { getBuyerApplicants } from 'api/job'
import { Link } from "react-router-dom";
const JobApplicantList = () => {
    const { jobId } = useParams();
    const [applicants, setApplicants] = useState(null)
    const [message, setMessage] = useState();


    useEffect(() => {
        getBuyerApplicants(jobId)
            .then(res => {
                setApplicants(res.data)
            })
            .catch(err => {
                setMessage(err.response.data);
            })
    }, [jobId])


    if (applicants === undefined) return <>Loading</>
    console.log(applicants)
    return (
        <>
            {applicants &&
                applicants.map(data => {
                    return (
                        <div key={data.id} className="py-2">
                            <Link to={`/buyer/job/profile/${data.sellerId}`} className="flex items-start">
                                <div className="h-14 w-14 bg-cover rounded-full mr-2" style={{ backgroundImage: "url(" + data.sellerProfilePicture + ")" }} >

                                </div>
                                <div>
                                    <div className=" font-semibold ">{data.sellername}</div>
                                    <div>{data.sellerDeadline} days</div>
                                </div>

                            </Link>
                            <div className="px-3 py-1 text-sm">{data.sellerLetter}</div>
                            <div className=" font-semibold">Budget price : ${data.sellerBudget} </div>
                            <hr className="mt-3" />
                        </div>
                    )
                })

            }
        </>
    )
}
export default JobApplicantList;