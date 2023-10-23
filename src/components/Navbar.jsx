import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use to navigate to other parts of our page

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_icon, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // Highlights active link
  const [toggle, setToggle] = useState(false); // Displays/closes menu

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* TOP LEFT LOGO */}
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // Scrolls to top of page
          }}
        >
          <img src={logo_icon} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Maria Rosales &nbsp;
            <span className="sm:block hidden">| RLSMARA Hub</span>
          </p>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE NAVIGATION */}
        <div className={`sm:hidden flex flex-col items-end rounded-lg transition-all ease-in duration-500 ${!toggle ? '' : 'absolute top-6 right-[5%] pt-4 pr-4 dark-gradient shadow-card'}`}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <ul className={`${!toggle ? 'hidden' : 'flex'} flex-col items-start gap-4 px-6 py-6`}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;