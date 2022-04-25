import { Route, Switch } from "react-router-dom";
import ProfileIndex from 'views/profile/ProfileIndex'
export default function Profile() {
  return (

    <>
      <b>Hello world</b>
      <Switch>


        <Route path="/profile/:userId" exact component={ProfileIndex}/>

      </Switch>
    </>

  )

}
