// src/components/Navbar.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 //import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
//  const [isOpen, setIsOpen] = useState(false);
/**
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 */
  return (
    <nav className="flex lg:justify-between lg:pt-6 lg:pl-36 lg:pr-36 bg-black lg:pb-8">
      <Link to={'/'} className='text-white'>Logo</Link>
      <ul className='flex gap-6 text-white'>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link to={'about'}>About</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-40 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link to={'contact'}>Contact</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link to={'medias'}>Media</Link>
        </li>
        <li className='hover:bg-red-500 lg:hover:h-10 lg:hover:w-24 ease-in duration-300 text-center rounded-2xl lg:hover:font-bold lg:text-2xl'>
          <Link>Upcoming programs</Link>
        </li>
      </ul>
      <Link className='text-white'>Get involved</Link>
    </nav>
  );
};

export default Navbar;