import { useState } from "react"
import { Route, Switch } from "react-router-dom";


import Settings from "./seller/Settings"
import IndexPage from "./seller/IndexPage";
import ApplyJob from "./seller/ApplyJob";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SellerSidebar from "components/Sidebar/SellerSidebar";




const SellerIndex = (props) => {

    const mystatus = props.mystatus;
    const [sideColaps, setSideColaps] = useState("hidden");



    return (
        <>
            <IndexNavbar fixed me={mystatus} setSideColaps={setSideColaps} />
            <SellerSidebar sideColaps={sideColaps} setSideColaps={setSideColaps} />


            <div className="relative md:ml-64 bg-gray-50">
                <div className="md:mt-20 lg:mt-28 sm:mt-16 mt-24 px-5 ">

                    <Switch>

                        <Route path="/" exact render={() => <IndexPage />} />
                        <Route path="/job/seller/apply/:jobId" exact component={ApplyJob} />
                        <Route path="/seller/setting" exact render={() => <Settings profiledata={mystatus} />} />
                        {/* <Route path="/buyer/jobs"  component={Jobs} /> */}
                        <Route path="/buyer/accounts" render={() => <h1>Hello this is accounts section</h1>} />

                    </Switch>

                </div>


                {/*
                 <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className=" lg:pt-24 md:pt-20 sm:pt-16 pt-16">

                        </div>
                    </div> 
                */}


            </div>

        </>
    )
}
export default SellerIndex;