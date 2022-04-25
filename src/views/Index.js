
import React, { useEffect, useState } from "react";
import { getMe } from "api/user";
import BuyerIndex from "./index/BuyerIndex";
import SellerIndex from "./index/SellerIndex";



export default function Index() {

  // Getting user Data for initialization
  const [mystatus, setMystatus] = useState();

  let i = true;
  useEffect(() => {
    getMe().then(response => {
      if (response.status === 200) {
        setMystatus(response.data);
        i = false;
      }
    }).catch((err) => {
      console.log(err.response)
    });
  }, [i])



  /* 
  *Rendering part
  */


  if (mystatus === undefined)
    return <></>

  if (mystatus.role === "BUYER") {
    return (<BuyerIndex mystatus={mystatus} />);
  }
  if (mystatus.role === "SELLER") {
    return (<SellerIndex mystatus={mystatus} />);
  }


}
