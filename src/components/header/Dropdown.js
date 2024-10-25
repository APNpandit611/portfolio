import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                type="button"
                onClick={handleToggle}
            >
                <span className="sr-only">Open user menu</span>
                <svg
                    
                    
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-10 h-10 ${isOpen ? 'text-yellow-800' : 'text-slate-300'}`}
                    
                    
                >
                    <path
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <div
                id="dropdownAvatar"
                className={`absolute right-0 dropdown-menu ${
                    isOpen ? "block" : "hidden"
                } py-10 max-h-64 overflow-auto divide-y divide-gray-100 rounded-lg shadow w-full h-full dark:bg-gray-800 dark:divide-gray-600`}
            >
                <ul className="flex flex-col gap-3">
                    <li className="py-3 transition transform hover:-translate-x-0.5 hover:-translate-y-0.5">
                        <Link
                            className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-red-500 cursor-pointer duration 300 ease"
                            to="/"
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="py-3 transition transform hover:-translate-x-0.5 hover:-translate-y-0.5">
                        <Link
                            className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-red-500 cursor-pointer duration 300 ease"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-3 transition transform hover:-translate-x-0.5 hover:-translate-y-0.5">
                        <Link
                            className="font-semibold text-slate-300 duration-300 ease ml-16 hover:text-red-500 cursor-pointer duration 300 ease"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
