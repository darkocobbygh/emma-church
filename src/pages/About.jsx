import React from 'react';
import './about.css'; // Ensure this imports your CSS with the animation

const Home = () => {
  return (
    <div>
      <div className='flex lg:flex-col pl-6 pr-6 lg:justify-center lg:pl-36 lg:pr-36 lg:pb-60 min-h-screen bg-cover background-slider'>
        <div className='flex lg:flex-col flex-col justify-center lg:gap-4 gap-4 lg:w-1/4'>
        <h2 className='font-bold lg:text-6xl text-5xl text-white'>About us</h2>
       <div >
         <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod in enim nibh porta sed sit maecenas viverra varius id sit in non dui.</p>
       </div>
        <div className='flex lg:gap-4 gap-4 flex-col lg:flex-row'>
          <button className='bg-white lg:h-14 lg:w-40 h-10 w-32 rounded font-bold hover:bg-violet-600 ease-in duration-300'>GET INVOLVED</button>
          <button className='text-white lg:h-14 lg:w-40 h-10 w-32 rounded font-bold hover:bg-violet-600 ease-in duration-300 border-solid border-2'>OUR PASTORS</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
