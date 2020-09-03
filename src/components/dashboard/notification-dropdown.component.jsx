import React from 'react';
import Popper from 'popper.js';
import { Link } from "react-router-dom";

const NotificationDropdown = (props) => 
{
    // props for dropdown
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    console.log(props.transparent);

    const openDropdownPopover = () => 
    {
        console.log("hey");
        new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-end"
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => 
    {
        setDropdownPopoverShow(false);
    };

    return(
       <>
            <Link
                className="text-gray-600 block py-1 px-5"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={e => {
                e.preventDefault();
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <i className={(props.transparent ? "far fa-bell" : "fas fa-bell")} style = {props.collapsed ? {color: "black"} : {color: "white"}}></i>
            </Link>
            <div
                ref={popoverDropdownRef}
                className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
            >
                <h1 className = "ml-3 text-black text-bold">Messages</h1>
                <Link
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    All
                </Link>
                <Link
                    href="#pablo"
                    className={
                        "text-sm text-italic py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Unread
                </Link>
                <Link
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                }
                onClick={e => e.preventDefault()}
                >
                    Comment Replies
                </Link>
                <Link
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                }
                onClick={e => e.preventDefault()}
                >
                    Post Replies
                </Link>
                <Link
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                }
                onClick={e => e.preventDefault()}
                >
                    Username mentions
                </Link>
                <div className="h-0 my-2 border border-solid border-gray-200" />
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Group Messages
                </a>
            </div>
       </> 
    );
};

export default NotificationDropdown;