import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { getToken, isLogin } from "api/auth";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Chat from "layouts/Chat"
// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";


const App = () => {


    useEffect(() => {

        if (isLogin() === false && window.location.pathname.slice(0, 6) !== "/auth/") {
            window.location.pathname = "/auth/login"
        }

    })
    if (isLogin() === true) {

        axios.interceptors.request.use(request => {
            request.headers['Content-Type'] = 'application/json; charset=utf-8'
            request.headers.common.Authorization = `Bearer ${getToken()}`;
            return request
        });
        // axios.interceptors.response.use(response => {
        //   console.log("response is "+response)
        //    return response
        //  })
    }



    return (
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Auth} />
                <Route path="/chat" component={Chat} />
                {/* add routes without layouts */}
                <Route path="/landing" exact component={Landing} />
                <Route path="/profile" component={Profile} />
                <Route path="/" component={Index} />

                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}
export default App;