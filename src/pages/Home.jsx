import React from 'react';
import './home.css'; // Ensure this imports your CSS with the animation

const Home = () => {
  return (
    <div>
      <div className='flex bg-gradient-to-r from-blue-400  lg:pl-36 lg:pr-36 to black-400 lg:flex-col justify-center items-center lg:gap-4 min-h-screen bg-cover background-slider'>
        <h2 className='font-bold lg:text-6xl text-white'>Welcome to our home</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod in enim nibh <br /> porta sed sit maecenas viverra varius id sit in non dui.</p>
        <div className='flex lg:gap-4'>
          <button className='bg-white lg:h-14 lg:w-40 rounded font-bold hover:bg-violet-600 ease-in duration-300'>GET INVOLVED</button>
          <button className='text-white lg:h-14 lg:w-40 rounded font-bold hover:bg-violet-600 ease-in duration-300 border-solid border-2'>ABOUT US</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
