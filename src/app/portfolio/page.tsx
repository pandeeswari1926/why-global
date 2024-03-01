import React from 'react'
import Image from 'next/image';
import Web from './web';
import WebDesign from './webDesign';
import Iot from './iot';
import Appdevelopment from './Appdevelopment'
import portfolio1 from '../../../public/wgs gifs (12).gif';
import portfolio2 from '../../../public/wgs gifs (13).gif';
import portfolio3 from '../../../public/wgs gifs (14).gif';
import portfolio4 from '../../../public/wgs gifs (15).gif';
import portfolio5 from '../../../public/wgs gifs (16).gif';
import message from "../../../public/message3.png";
import message1 from '../../../public/message2.png';
import message2 from '../../../public/Rectangle 129.png';
import message3 from '../../../public/message5.png'
import message4 from '../../../public/message4.png';


const Page = () => {
    return (
        <>
            {/* first section */}
            <div className='bg-portfolio bg-center overflow-hidden'>
                <div className='pt-28 px-10'>
                    <div className='text-center '>
                        <h1 className='text-white md:text-8xl text-xl font-semibold leading-snug'>TAKE YOUR IDEAS TO THE <br className='md:block hidden' />NEXT LEVEL</h1><br />
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra <br /> arcu at mi maximus, id placerat turpis fringilla. scelerisque auctor interdum. </p><br /><br />
                        <button className='bg-[#FF9315] text-white border-2 border-white font-medium p-4 px-14 rounded-full hover:text-[#FF9315] hover:bg-white drop-shadow-2xl'>Get started</button>
                    </div>
                    <div className=''>
                        <div>
                            <div className='flex md:flex-row flex-col justify-around  md:gap-0 gap-10'>
                                <div className='md:w-80 w-full relative md:top-20 top-20 md:ml-10 ml-20'>
                                    <Image src={portfolio5} alt='' className='w-[55%] rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25' />
                                    <Image src={message2} alt='' className='absolute w-[50%] -mt-10 -ml-28' />
                                </div>
                                <div className='md:w-80 w-full relative md:left-24 md:top-20 top-28 md:mx-0 mx-6'>
                                    <Image src={portfolio4} alt='' className='w-[55%] rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25' />
                                    <Image src={message1} alt='' className='absolute w-[50%] -mt-10 ml-36' />
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col justify-evenly items-center pb-14 md:gap-0 gap-10'>
                                <div className='md:w-80 w-full relative md:top-20 top-36 md:ml-10 ml-40'>
                                    <Image src={portfolio2} alt='' className='w-[55%] rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25' />
                                    <Image src={message} alt='' className='absolute w-[50%] -mt-10 -ml-28' />
                                </div>
                                <div className='md:w-[400px] w-full relative md:-mt-28 mt-40'>
                                    <Image src={portfolio3} alt='' className='md:w-full w-[55%] rounded-full border-[20px] border-gray-300 drop-shadow-2xl border-opacity-25' />
                                    <Image src={message4} alt='' className='absolute w-[50%] -mt-20 md:left-72 md:ml-0 ml-32' />
                                </div>
                                <div className='md:w-80 w-full relative md:left-36 md:top-16  md:ml-0 ml-20'>
                                    <Image src={portfolio1} alt='' className='w-[55%] rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25' />
                                    <Image src={message3} alt='' className='absolute w-[50%] -mt-10 ml-32' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className='overflow-hidden'>
                <Web />
            </div>

            {/* third section */}
            <div>
                <Appdevelopment />
            </div>

            {/* fourth section */}
            <div>
                <WebDesign />
            </div>

            {/* sixth section */}

            <div>
                <Iot />
            </div>
        </>
    )
}

export default Page