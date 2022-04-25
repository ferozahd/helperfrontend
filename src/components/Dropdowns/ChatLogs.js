import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import * as fa from 'react-icons/fa'



const ChatLogs = (props) => {

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const dropdownbody = useRef();


  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown)
    return () => { document.removeEventListener("click", handleCloseDropdown) }
  })


  if (props.data === undefined)
    return <></>
  let me = props.data;


  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };



    function handleCloseDropdown(e) {
    if (!dropdownbody.current.contains(e.target)) {
      closeDropdownPopover();
    }
  }





  return (
    <div ref={dropdownbody}>
      <div
        className=" text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
       
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
  
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm  inline-flex items-center justify-center ">
            <span className="relative">
              <fa.FaEnvelope className=" text-2xl" />

              {me !== 0 &&
                <span  className="absolute w-2 h-2 top-0 right-0 rounded-full bg-red-500 text-red-500"></span>
              }
            </span>
          </span>
        </div>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >

   
        <Link to="/chat/feroz">
          <div
          
            className=
            "text-sm py-2 px-4 font-normal block w-full  whitespace-nowrap bg-transparent text-gray-700"

          >
            Feroz Ahmmed
          </div>
        </Link>
        <Link to="/chat/sultana" className="hover:text-gray-800" >
          <div
            href="#pablo"
            className={
              "text-sm py-2 font-normal block w-full px-4 whitespace-nowrap  text-gray-700"
            }
          >
            Sultana Khatun
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatLogs;
