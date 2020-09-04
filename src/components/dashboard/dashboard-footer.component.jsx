import React from 'react';
import { Link } from "react-router-dom";

const DashboardFooter = () => 
{
    return(
        <>
            <footer
                className="block py-4 "
            >
                <div className="container mx-auto px-4">
                    <hr className="mb-4 mt-2 border-b-1 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}
                                <Link
                                to="#"
                                className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                                >
                                Eui Gist
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                <Link
                                    to="#"
                                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                >
                                    Eui Gist
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="#"
                                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                >
                                    About Us
                                </Link>
                                </li>
                                <li>
                                <Link
                                    to="#" 
                                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                >
                                    Blog
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default DashboardFooter;