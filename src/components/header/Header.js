import React from "react";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import Dropdown from "./Dropdown.js";

const Header = () => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 flex items-center justify-between py-5 mx-12">
            <Logo />
            <div className="hidden lg:block">
                <Nav />
            </div>
            <div className="lg:hidden">
                <Dropdown />
            </div>
        </div>
    );
};

export default Header;
