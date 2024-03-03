import React from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const NavLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctor', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="logo" className="h-12 w-auto" />

        {/* menu */}
        <ul className="flex items-center space-x-8">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={`text-${index % 2 === 0 ? 'primaryColor' : 'textColor'} text-[16px] leading-7 font-${index % 2 === 0 ? '600' : '500'}`}
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
