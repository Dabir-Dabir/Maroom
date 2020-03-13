import React from "react";
import './sticky-header.scss';
import Logo from '../logo';
import Hamburger from '../hamburger';
import Navigation from "../navigation";

const StickyHeader = () => {
    return (
        <header className="sticky-header">
            <div className="sticky-header__mobile">
                <Logo />
                <Hamburger />
            </div>
            <Navigation/>
        </header>
    )
};

export default StickyHeader;