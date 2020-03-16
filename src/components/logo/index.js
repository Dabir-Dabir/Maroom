import React from "react";
import logo from './logo.png'
import './logo.scss';

const Logo = () => {
    return (
        <a href="#" className="logo">
            <svg className="logo__mobile-img d-md-none" xmlns="http://www.w3.org/2000/svg" width="28" height="22"
                 fill="none" viewBox="0 0 28 22">
                <g clipPath="url(#prefix__clip0)">
                    <path fill="#F57C00" fillRule="evenodd"
                          d="M1.293 7.536c.26-2.928 3.26-2.775 2.36.168-.44 1.45-1.893 3.871-2.44 5.944-2.08 7.904 5.574 7.717 6.88 4.761-1.153-.501-1.2-1.845-.806-3.978.386-2.087 2.126-9.235 4.193-8.854.32.06.613.268.66.609.187 1.27-1.267 5.37-1.6 7.048l4.907-.04c.653-1.96 1.893-6.193 3.34-7.617.6-.588 1.58-.876 1.753.174.407 2.46-2.273 6.8-2.487 9.636-.6 7.984 8.94 8.572 9.98 2.976-5.653-1.471-.226-8.787-.773-13.134-.707-5.623-7.047-6.874-9.893-2.233-1.167-4.527-6.68-3.03-7.874.682 0-3.985-5.533-4.64-7.98-2.166-2.02 2.046-1.86 5.523-.22 6.024zm12.44 9.349c1.094-.02 1.514-2.073.38-2.113-1.253-.04-1.346 2.133-.38 2.113zm-3.106-.04c1.006.02 1.32-2.06.373-2.053-1.253.013-1.333 2.04-.373 2.053z"
                          clipRule="evenodd"/>
                </g>
                <defs>
                    <clipPath id="prefix__clip0">
                        <path fill="#fff" d="M0 0H28V22H0z"/>
                    </clipPath>
                </defs>
            </svg>
            <img src={logo} alt="Maroom"
                 className="logo__desktop-img d-none d-md-block"/>
        </a>
    );
};

export default Logo;