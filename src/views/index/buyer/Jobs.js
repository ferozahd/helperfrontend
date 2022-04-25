import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import JobCreator from "./JobCreator";
import JobList from "./JobList";
import JobApplicantList from "./JobApplicantList"
import SellerProfile from "views/profile/SellerProfile"

const Jobs = () => {
    const [jobs, setJobs] = useState();

    return (
        <div className="lg:px-10 lg:py-1 sm:px-2 lg:mt-10 mt-24">
            <Switch>

            <Route path="/buyer/job" exact component={JobList} />
            <Route path="/buyer/job/applicant/:jobId" exact component={JobApplicantList} />
            <Route path="/buyer/job/create" exact component={JobCreator} />
            <Route path="/buyer/job/profile/:userId" exact component={SellerProfile}/>
            </Switch>
        </div>
    )
}
export default Jobs;