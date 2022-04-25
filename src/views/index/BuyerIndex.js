import { useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BuyerSidebar from "components/Sidebar/BuyerSidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import { Route, Switch } from "react-router-dom";
import Settings from "./buyer/Settings"
import Jobs from "./buyer/Jobs";



const BuyerIndex = (props) => {

    const mystatus = props.mystatus;
    const [sideColaps, setSideColaps] = useState("hidden");


    return (
        <>
            <IndexNavbar fixed me={mystatus} setSideColaps={setSideColaps} />
            <BuyerSidebar sideColaps={sideColaps} setSideColaps={setSideColaps} />


            <div className="relative md:ml-64 bg-gray-50">
                <div className="md:mt-20 lg:mt-24  sm:mt-16">

                    <Switch>

                        <Route path="/" exact component={HeaderStats} />
                        <Route path="/buyer/setting" exact render={() =><Settings profiledata={mystatus}/>} />
                        <Route path="/buyer/job"  component={Jobs} />
                        <Route path="/buyer/accounts" exact render={() => <h1>Hello this is accounts section</h1>} />

                    </Switch>
                    
                </div>

                {/* <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className=" lg:pt-24 md:pt-20 sm:pt-16 pt-16">

                    </div>
                </div> */}
            </div>


        </>
    )

}
export default BuyerIndex;