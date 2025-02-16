import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, } from "framer-motion";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Dropdown animation variants
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
    };

    return (
        <div ref={dropdownRef} className="dropdown-container relative">
            <button
                id="dropdownUserAvatarButton"
                type="button"
                onClick={handleToggle}
                className="focus:outline-none"
                aria-expanded={isOpen ? "true" : "false"}
                aria-haspopup="true"
            >
                <span className="sr-only">
                    {isOpen ? "Close menu" : "Open menu"}
                </span>
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-10 h-10 text-white transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

                {isOpen && (
                    <motion.div
                        id="dropdownAvatar"
                        className="absolute right-0 w-80 mt-2 rounded-lg shadow-xl bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdownUserAvatarButton"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <ul className="py-2">
                            <li>
                                <Link
                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                                    to="/"
                                    role="menuitem"
                                >
                                    
                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                                    to="/about"
                                    role="menuitem"
                                >
                                    
                                    <span>About</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </motion.div>
                )}
        </div>
    );
};

export default Dropdown;