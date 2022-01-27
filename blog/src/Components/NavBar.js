import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlueSignature from './BlueSignature';
import { HiOutlineMenu } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { handleOuterClicks, handleSelectedItem } from './ClickHandler';

const NavBar = () => {
  const [ isOpen, setOpen ] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    handleOuterClicks(navRef, closeMenu);
    handleSelectedItem('.navbar ul li', closeMenu);
  }, [navRef]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className="navbar relative " ref={navRef}>

      <div className="relative items-center justify-center w3 h3 fr mr3" id='menu' onClick={toggleMenu}>
        <IconContext.Provider value={{
            className: "menu-icon", 
            size: "2rem",
            color: "#191919",
            style: {}}}>
          <HiOutlineMenu />
        </IconContext.Provider>
      </div>

      <div className={'absolute w-100 bg-white ' + (isOpen ? 'open':'')} id='link-wrapper'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles-list">Articles</Link></li>
        </ul>
      </div>
      
      <div className="m3 fr absolute top-0 " id='logo'>
        <BlueSignature customWidth="65" customHeight="29"/>
      </div>
    </nav>
  )
}

export default NavBar
