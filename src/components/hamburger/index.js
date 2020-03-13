import React from "react";
import './hamburger.scss';

const Hamburger = () => {

    function openNavigation() {
        const hamburger = document.getElementsByClassName('hamburger')[0];
        const navigation = document.getElementsByClassName('navigation')[0];

        if (hamburger.classList.contains('hamburger--opened')) {
            hamburger.classList.remove('hamburger--opened');
            navigation.classList.remove('navigation--opened');
        } else {
            hamburger.classList.add('hamburger--opened');
            navigation.classList.add('navigation--opened');
        }
    }

    return (
        <button onClick={openNavigation}
                className="hamburger d-md-none btn btn--type_outline btn--size_s">
            <span className="hamburger__line hamburger__line1"></span>
            <span className="hamburger__line hamburger__line2"></span>
            <span className="hamburger__line hamburger__line3"></span>
            <span className="hamburger__line hamburger__line4"></span>
            <span className="hamburger__line hamburger__line5"></span>
        </button>
    );
};

export default Hamburger;