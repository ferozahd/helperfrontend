import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatIndex from "views/chat/ChatIndex";

const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
           
            <Route path="/chat/:userId" exact component={ChatIndex} />
                {/* <Route path="/chat/test" exact component={Test} /> */}
                {/* <Route path="/chat/firstmessage" exact component={FirstMessage} /> */}

                {/* <Redirect from="*" to="/chat/" /> */}
            </Switch>

        </BrowserRouter>
    )
}

export default Index;