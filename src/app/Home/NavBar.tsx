"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image'
import logoicon from '../asset/logo.png'
import logoicon2 from '../asset/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHSquare } from '@fortawesome/free-solid-svg-icons'
import Home from './page1';

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open)
  }

  return (
    <>

      <div className='z-20 fixed w-full md:top-7 top-0 '>
        <section className='py-[1%] bg-white flex justify-between px-[8%] pt-4 drop-shadow-xl z-10  w-full top-0'>

          <Link href='/Home'><Image src={logoicon} alt='logo' className='xl:flex lg:hidden object-contain cursor-pointer' /></Link>
          <Link href='/Home'><Image src={logoicon2} alt='logo' className='object-contain w-[5%] hidden  lg:block xl:hidden ' /></Link>
          <FontAwesomeIcon icon={faBars} className='size-5 my-auto lg:hidden' onClick={handleClick} />

          <ul className='space-x-6 pt-3 lg:flex flex-row hidden cursor-pointer'>
            <Link href='/About'><li className='hover:text-primarycolor'>Company</li></Link>
            <Link href='/services'><li className='hover:text-primarycolor'>Services</li></Link>
            <Link href='solutions'><li className='hover:text-primarycolor'>Solutions</li></Link>
            <Link href='/portfolio'><li className='hover:text-primarycolor'>Portfolio</li></Link>
            <Link href='/testimonial'><li className='hover:text-primarycolor'>Testimonials</li></Link>
            <Link href='#'><li className='hover:text-primarycolor'>Events</li></Link>
            <Link href='#'><li className='hover:text-primarycolor'>ContactUs</li></Link>
            <button className='p-2 -mt-3 flex items-end mx-10 cursor-pointer bg-white text-primarycolor w-[20%] shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4'>
              Get a Quote
            </button>
          </ul>


        </section>
        {open && (
          <div className='w-[65%] float-right todown'>
            <ul className='flex  flex-col justify-center pl-10 text-left  pr-4 bg-primarycolor pb-5 pt-5'>
              <Link href='/About'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Company</li></Link>
              <Link href='/services'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Services</li></Link>
              <Link href='solutions'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Solutions</li></Link>
              <Link href='/portfolio'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Portfolio</li></Link>
              <Link href='#'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Events</li></Link>
              <Link href='#'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Contact Us</li></Link>

              <Link href='/testimonial'><li className='bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor'>Testimonials</li></Link>
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
