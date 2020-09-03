import React from 'react';
import Popper from "popper.js";
import { Link } from "react-router-dom";

const UserDropdown = () => 
{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();

    const openDropdownPopover = () => {
        new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-end"
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return(
        <>
            <Link
                className="text-gray-600 block"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={e => {
                e.preventDefault();
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={require("../../images/ProfilePic2.jpg")}
                        />
                    </span>
                </div>
            </Link>
            <div
                ref={popoverDropdownRef}
                className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
            >
                <h1 className = "ml-3">My stuffs</h1>
                <Link
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    <i className="fas fa-user-circle opacity-75 mr-2 text-sm"></i> My Profile
                </Link>
                <Link
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    <i className="fas fa-user-cog opacity-75 mr-2 text-sm"></i> User settings
                </Link>
                <Link
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={e => e.preventDefault()}
                >
                    <i className="fas fa-sign-out-alt opacity-75 mr-2 text-sm"></i> Log out
                </Link>

                <div className="h-0 my-2 border border-solid border-gray-200" />
                    <h1 className = "ml-3">View options</h1>
                    <Link
                        href="#pablo"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                        }
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-adjust opacity-75 mr-2 text-sm"></i> Dark Mode
                    </Link>
            </div>
        </>
    );
};

export default UserDropdown;