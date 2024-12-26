import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="flex items-center justify-between mt-1 ">
                <li className="">
                    <Link
                        className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-indigo-500
 cursor-pointer duration 300 ease "
                        to="/"
                    >
                        Projects
                    </Link>
                </li>

                <li className="">
                    <Link
                        className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-indigo-500
 cursor-pointer duration 300 ease "
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                {/* <li className="">
                    <Link
                        className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-indigo-500
 cursor-pointer duration 300 ease "
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Nav;
