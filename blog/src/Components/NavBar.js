import React from 'react';
import { Link } from 'react-router-dom';
import BlueSignature from './BlueSignature';

const NavBar = () => {
  return (
    <nav className="navbar relative ">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/articles-list">Articles</Link></li>
      </ul>
      <div className="m3 fr absolute top-0 " id='logo'>
        <BlueSignature customWidth="65" customHeight="29"/>
      </div>
    </nav>
  )
}

export default NavBar
