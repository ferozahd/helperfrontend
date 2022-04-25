import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { isLogin } from "api/auth";


import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import ApproveTokenPage from "views/auth/ApprovedToken";

export default function Auth() {

  useEffect(() => {
    if (isLogin() === true) {
      window.location.pathname = "/";
    }
  })

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-cover bg-gray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/auth-bg-2551020822.jpg')",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/approved/:token" exact render={(props)=><ApproveTokenPage token={props.match.params.token}/>}/>
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
