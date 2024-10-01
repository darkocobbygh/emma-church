// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="flex justify-between lg:pt-6 lg:pl-36 lg:pr-36 bg-black lg:pb-8 pr-8 pt-8  pb-8 pl-8">
      <Link to={'/'} className='text-white'>Logo</Link>
      <div className="lg:hidden cursor-pointer transition-transform duration-300" onClick={toggleNavbar}>
        {isOpen ? <FaTimes className="text-white transition-opacity duration-300" size={24} /> : <FaBars className="text-white transition-opacity duration-300" size={24} />}
      </div>
      <ul className={`flex flex-col lg:flex-row gap-6 text-white ${isOpen ? 'absolute bg-black top-16 left-0 w-full' : 'hidden lg:flex'}`}>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link onClick={handleLinkClick} to={'/'}>Home</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link onClick={handleLinkClick} to={'about'}>About</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-40 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link onClick={handleLinkClick} to={'contact'}>Contact</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link onClick={handleLinkClick} to={'medias'}>Media</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
      <Link className='text-white hidden lg:block'>Get involved</Link>
    </nav>
  );
};

export default Navbar;