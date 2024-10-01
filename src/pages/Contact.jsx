import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='bg-black h-screen'>
     <div className='flex h-screen pl-36 pr-36 pb-20 pt-20'>
     <div className='text-white w-1/2 flex flex-col gap-6'>
        <h1 className='text-6xl font-bold'>Get in touch</h1>
        <p className='w-96 text-customGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit diam habitant faucibus sit vel, leo ultrices.</p>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center space-x-4'>
          <div className='rounded-full bg-customGray p-4'>
          <IoCallOutline className='w-10 h-10 text-white' />
          </div>
            <div className='flex flex-col'>
            <p>Give us a call</p>
            <p className='text-customGrey'>+61 3 9694 7998</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='rounded-full bg-customGray p-4 '>
            <CiMail className='w-10 h-10 text-white'/>
            </div>
            <div>
            <p>Send us an email</p>
            <p className='text-customGrey'>contact@christianx.com</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
          </div>
        </div>
      </div>
    <div className='bg-white w-1/2 pt-10'>
      <form action="" className='lg:pl-20 flex flex-col'>
      <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col'>
      <label htmlFor="name" className='font-bold text-lg'>Name</label>
      <input type="text" placeholder='Full name' className='border-solid border-2 h-12 pl-4 w-56'/>
      </div>
      <div className='flex flex-col'>
      <label htmlFor="email" className='font-bold text-lg'>Email</label>
      <input type="text" placeholder='Email address' className='border-solid border-2 h-12 pl-4 w-56' />
      </div>
      <div className='flex flex-col'>
      <label htmlFor="Phone number" className='font-bold text-lg'>Phone number</label>
      <input type="text" placeholder='(123) - 456 -7890' className='border-solid border-2 h-12 pl-4 w-56' />
      </div>
      <div className='flex flex-col'>
      <label htmlFor="Subject" className='font-bold text-lg'>Subject</label>
      <input type="text" placeholder='ex. Ministries' className='border-solid border-2 h-12 pl-4 w-56'/>
      </div>
      <div className='flex flex-col gap-2'>
      <label htmlFor="Message" className='font-bold text-lg'>Message</label>
      <div>
      <textarea name="" placeholder='Type your message here...' className='border-solid border-2 h-40 w-96 pl-4 pt-6' id=""></textarea>
      </div>
      <button className='bg-black text-white h-16 w-32'>SUBMIT</button>
      </div>
      </div>
      </form>
    </div>
     </div>
    </div>
  )
}

export default Contact
