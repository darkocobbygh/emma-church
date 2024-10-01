import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='lg:pr-36 lg:pl-36 pr-8 pl-8 pt-8 pb-8 items-center text-center flex flex-col gap-4'>
      <p className='lg:font-bold lg:text-3xl text-3xl'>Welcome to Our Church Family!</p>
      <p>We’re so glad you’re here! Whether you’re new to the faith or looking for a community, we invite you to join us as we grow in Christ together. If you have any questions or would like to learn more, please don’t hesitate to reach out!</p>
     <div className='flex gap-4'>
     <Link>
     <FaFacebook size={50} />
     </Link>
     <Link>
     <RiTwitterXFill size={50} />
     </Link>
     <Link>
     <FaInstagram size={50} />
     </Link>
     <Link>
     <FaLinkedin size={50} />
     </Link>
     </div>
    </div>
  )
}

export default Footer
