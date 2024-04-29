import React from 'react'
import msgicon from '../asset/msgicon.png'
import locationicon from '../asset/locationicon.png'
import Image from 'next/image'
import facebookicon from '../asset/facebookicon.png'
import twittericon from '../asset/twittericon.png'
import instagramicon from '../asset/instagramicon.png'
import linkedinicon from '../asset/linkedinicon.png'
import youtubeicon from '../asset/youtubeicon.png'
import { FaMailchimp } from 'react-icons/fa'
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <>
      <section className='bg-primarycolor text-white w-full h-8 px-[8%] md:flex justify-between  hidden fixed z-20'>
        <section className='flex gap-2 items-center justify-center '>
          <CiMail />
          <p className='text-sm'>contact@whyglobalservices.com</p>
          <p>|</p>
      <IoLocationOutline />
          <p className='text-sm'>Egmore, Chennai.</p>
        </section>
        <section className='flex space-x-5 pt-1'>
          <Image src={facebookicon} alt='social media icon' className='h-4' />
          <Image src={twittericon} alt='social media icon' className='h-4' />
          <Image src={instagramicon} alt='social media icon' className='h-4' />
          <Image src={linkedinicon} alt='social media icon' className='h-4' />
          <Image src={youtubeicon} alt='social media icon' className='h-4' />
        </section>
      </section>
    </>
  )
}

export default TopBar