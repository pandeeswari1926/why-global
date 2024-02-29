import React from 'react'
import Image from 'next/image';
import test from '../../../public/testimonial.png';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import wgs from '../../../public/WGS LIVE PICS (8) 1.png';


const Test = () => {
    return (
        <>
            <div className='pt-10 md:pl-20 pl-5'>
                <div className='bg-test text-center bg-cover w-full xl:h-[100vh] lg:h-[600px] md:h-[400px] sm:h-72 h-56 lg:mt-14  mt-28'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        <div className='md:p-20 p-5 lg:ml-20 ml-5 md:pt-32 pt-10'>
                            <BiSolidQuoteAltLeft className='size-10 text-[#FF9315] flex justify-end items-end text-end w-full' /><br /><br />
                            <p className='text-start lg:w-[60%] w-full text-xl'>Our commitment to client satisfaction sets us apart, delivering results that speak volumes. With a relentless focus on your happiness, we strive to make every interaction remarkable.</p><br /><br />
                            <BiSolidQuoteAltLeft className='size-10 text-[#FF9315]' />
                        </div>
                        <div className='w-full h-full pt-12 lg:pr-20'>
                            <div className='text-start sm:pl-64 pl-32'>
                                <h1 className='text-xl text-gray-700 font-semibold'>Ramya Annamalai</h1>
                                <p className=''>Web developer</p>
                            </div>
                            <Image src={wgs} alt='' />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test