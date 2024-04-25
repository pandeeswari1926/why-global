import React from 'react'
import Image from 'next/image'
import contactgettin from "../asset/getin.png"
import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";



const Contactform = () => {
    return (
        <div className=' w-full p-10'>
            <div className='relative max-w-5xl h-80 mx-auto rounded-3xl drop-shadow-sm'>
                <Image
                    src={contactgettin}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                />
                <div className='flex absolute inset-0 px-20 py-14 '>
                    <div className='flex flex-col justify-between item-center'>
                        <h3 className=' text-white text-3xl md:text-5xl font-bold '>Get in Touch</h3>

                        <ul className='flex flex-col sm:px-2 sm:py-5 text-white text-xs sm:text-sm'>
                            <li className='flex items-center gap-2'> <MdEmail /> contact@whyglobalservices.com</li>
                            <li className='flex items-center gap-2'> <MdLocationOn /> Egmore, Chennai</li>
                            <li className='flex items-center gap-2'> <MdLocalPhone /> +91-7299119900</li>
                        </ul>
                        <div className='flex flex-row text-white text-lg px-2 gap-1 drop-shadow-sm'>
                            <a href="https://www.facebook.com/whyglobal/"><FaFacebookSquare /></a>
                            <a href="https://twitter.com/wehelpyou19"><FaTwitterSquare /></a>
                            <a href="https://www.instagram.com/whyglobalservices/"><FaInstagramSquare /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="https://www.youtube.com/@WhyGlobalServices"><FaYoutubeSquare /></a>
                        </div>
                    </div>

                    <div className='absolute md:top-5 md:right-5 drop-shadow-xl bg-white rounded-xl md:w-1/2 w-full right-0 top-72 p-5 '>
                        <form action="" className='grid grid-cols-1 md:grid-cols-2 p-2 md:p-7 gap-2 md:gap-4 text-sm'>
                            <input type="text" className='border border-gray-400 p-2 rounded-md' placeholder='Name' />
                            <input type="text" className='border border-gray-400 p-2 rounded-md' placeholder='Email ID' />
                            <input type="text" className='border border-gray-400 p-2 rounded-md' placeholder='Mobile no.' />
                            <input type="text" className='border border-gray-400 p-2 rounded-md' placeholder='Services*' />
                            <textarea name="" id="" cols={1} rows={8} placeholder='Message' className='border border-gray-400 p-2 rounded-md md:col-span-2'> </textarea>
                        </form>
                        <div className='flex flex-col px-5'>
                            <button className='flex justify-end drop-shadow-sm rounded-md p-2'>Submit</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Contactform
