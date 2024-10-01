import React from 'react';
import './about.css'; // Ensure this imports your CSS with the animation

const Home = () => {
  return (
    <div>
      <div className='flex lg:flex-col justify-center lg:pl-36 lg:pr-36 lg:pb-60 min-h-screen bg-cover background-slider'>
        <div className='flex lg:flex-col lg:gap-4 w-1/4'>
        <h2 className='font-bold lg:text-6xl text-white'>About us</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod in enim nibh porta sed sit maecenas viverra varius id sit in non dui.</p>
        <div className='flex lg:gap-4'>
          <button className='bg-white lg:h-14 lg:w-40 rounded font-bold hover:bg-violet-600 ease-in duration-300'>GET INVOLVED</button>
          <button className='text-white lg:h-14 lg:w-40 rounded font-bold hover:bg-violet-600 ease-in duration-300 border-solid border-2'>OUR PASTORS</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
