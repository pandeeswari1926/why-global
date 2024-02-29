import React from 'react'
import Image from 'next/image';
import line from '../../../public/Line 1.png';
import ceo from '../../../public/WGS LIVE PICS (6) 1.png';
import gif from '../../../public/wgs gifs (11) 1.png';
import message from '../../../public/Vector 86.png';
import SliderPage from './slider';
import Test from './test';


const Page = () => {
    return (
        <>
            {/* first section */}
            <div className='flex md:flex-row flex-col w-full relative pt-10 '>
                <div className='space-y-10 flex flex-row'>
                    <div className='w-full h-full absolute top-96 md:hidden block left-0 ml-auto'>
                        <Image src={message} alt='' className='' />
                        <div className='absolute top-3 p-3 left-5'>
                            <h1 className='lg:text-xl text-base text-[#FF9315] font-semibold'>At the heart of everything we do,</h1>
                            <h1 className='lg:text-4xl text-xl text-gray-400 font-semibold leading-relaxed'>See how we&apos;ve made a difference..</h1>
                        </div>
                    </div>
                    <div>
                        <Image src={gif} alt='' className='absolute md:top-64 top-96 md:mt-0 mt-52 left-0 lg:block hidden' />
                    </div>
                </div>
                <div className=''>

                    <div className='tri absolute right-0 top-0 bg-gradient-to-b from-[#FF9315] via-[#f9b465] to-transparent xl:w-[85%] lg:w-[80%] md:w-[70%] w-[500px] lg:h-[500px] md:h-[300px] sm:h-[350px] h-[300px]'></div>
                    <div>
                        <Image src={line} alt='' className='absolute xl:right-56 lg:right-32 md:right-16 right-0 top-0 lg:w-fit md:w-[30%] w-fit ' />
                    </div>
                    <div>
                        <Image src={ceo} alt='' className='absolute xl:right-44 right-0 top-0 xl:w-[30%] lg:w-[40%] md:w-[30%] sm:w-[40%] w-fit ' />
                    </div>
                    <div className='absolute xl:top-[400px] lg:top-96 md:top-48 sm:top-48 top-64 xl:right-64 right-0 rounded-t-lg bg-white opacity-50 sm:w-96 w-80 p-2 '>
                        <h1>Sathishkumar kannan</h1>
                        <p>CEO</p>
                    </div>
                    <div className='mr-20 lg:w-full lg:h-full w-[50%] absolute md:block hidden'>
                        <Image src={message} alt='' className='' />
                        <div className='absolute lg:top-16 top-8 left-20'>
                            <h1 className='lg:text-xl text-base text-[#FF9315] font-semibold'>At the heart of everything we do,</h1><br />
                            <h1 className='lg:text-4xl text-xl text-gray-400 font-semibold leading-relaxed'>See how we&apos;ve made a<br className='lg:block hidden' /> difference..</h1>
                        </div>
                    </div>
                </div>
            </div >

            {/* second section */}

            <div className='mt-96'>

                <SliderPage />

            </div>


            {/* third section */}
            <div>
                <Test />
            </div>
        </>
    )
}

export default Page