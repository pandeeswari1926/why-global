"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import logoicon from '../asset/logo.png'
import logoicon2 from '../asset/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHSquare } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open)
  }

  return (
    <>

      <div className='z-20 fixed w-full top-7 '>
        <section className='py-[1%] bg-white flex justify-between px-[8%] pt-4 drop-shadow-xl z-10  w-full top-0'>

          <Image src={logoicon} alt='logo' className='xl:flex lg:hidden object-contain' />
          <Image src={logoicon2} alt='logo' className='object-contain w-[5%] hidden  lg:block xl:hidden ' />
          <FontAwesomeIcon icon={faBars} className='size-5 my-auto lg:hidden' onClick={handleClick} />

          <ul className='space-x-6 pt-3 lg:flex flex-row hidden cursor-pointer'>
            <li className='hover:text-primarycolor'>Company</li>
            <li className='hover:text-primarycolor'>Services</li>
            <li className='hover:text-primarycolor'>Solutions</li>
            <li className='hover:text-primarycolor'>Portfolio</li>
            <li className='hover:text-primarycolor'>Testimonials</li>
            <li className='hover:text-primarycolor'>Events</li>
            <li className='hover:text-primarycolor'>ContactUs</li>
            <p className='p-2 flex items-end mx-10 cursor-pointer bg-white text-primarycolor w-[20%] shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4'>
              Get a Quote
            </p>
          </ul>


        </section>
        {open && (
          <div className='w-[65%] float-right todown'>
            <ul className='flex  flex-col justify-center pl-10 text-left  pr-4 bg-primarycolor pb-5 pt-5'>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Company</li>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Services</li>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Solutions</li>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Portfolio</li>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Events</li>
              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Contact Us</li>

              <li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Testimonials</li>
              <li className='p-2 mx-auto w-full flex items-end justify-center   cursor-pointer bg-white text-center text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4'>
                Get a Quote
              </li>

            </ul>
          </div>)
        }
      </div>
    </>
  )
}

export default NavBar
