import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { logoutImplements } from "api/auth";



const ProfileLogs = (props) => {

    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = useRef();
    const popoverDropdownRef = useRef();
    const dropdownbody = useRef();

    useEffect(() => {
        document.addEventListener("click", handleCloseDropdown)
        return () => { document.removeEventListener("click", handleCloseDropdown) }
    })


    if (props.data === undefined)
        return <h1>Loading</h1>
    let me = props.data;



    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };



    function handleCloseDropdown(e) {
        if (!dropdownbody.current.contains(e.target)) {
            closeDropdownPopover();
        }
    }





    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };


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
                {/* object-cover rounded-full align-middle border-none shadow-lg */}
                <div className="items-center flex "><span className="w-14 h-14 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full">
                    <div  className="h-14 w-14 bg-cover rounded-full" style={{ backgroundImage: "url(" + me.profilepicture + ")" }}  ></div>
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

                <Link to="/admin/dashboard">
                    <div
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                    >
                        Profile
                    </div>
                </Link>
                <Link to="/admin/settings">
                    <div
                        className=
                        "text-sm py-2 px-4 font-normal block w-full  whitespace-nowrap bg-transparent text-gray-700"

                    >
                        Settings
                    </div>
                </Link>
                <Link to="/admin/tables">
                    <div
                        className={
                            "text-sm py-2 font-normal block w-full px-4 whitespace-nowrap bg-transparent text-gray-700"
                        }
                    >
                        Balance
                    </div>
                </Link>

                <div
                    onClick={logoutImplements}
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 cursor-pointer ">
                    Logout
                </div>


            </div>
        </div>
    );
};

export default ProfileLogs;
