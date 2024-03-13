'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import ecommerce from '../../../public/36.png';
import wordpress from '../../../public/37.png';
import html from '../../../public/38.png';

const Web = () => {
    const [showActiveContent, setShowActiveContent] = useState<string>("E-Commerce");
    const toggleContent = (content: string) => {
        setShowActiveContent(content);
    };
    return (
        <>
            <div className='m-10  grid lg:grid-cols-2 grid-cols-1  relative'>
                <div className='lg:ml-20 lg:mx-0 mx-auto mt-28'>
                    <div className='flex flex-row '>
                        <div className='border-[30px] border-white drop-shadow-xl rounded-full'>
                            <h1 className='text-[#FF9315] bg-white border-2 border-[#FF9315] font-semibold md:p-12 p-10 md:py-28 py-24 rounded-full w-fit'>WEB DEVELOPMENT</h1>
                        </div>
                        <div className='md:pl-5 p-4 flex flex-col gap-5 absolute lg:left-72 top-44 right-0  '>
                            <button onClick={() => toggleContent('E-Commerce')} className={` focus: outline-none font-bold sm:text-lg text-xs rounded-md drop-shadow-xl w-fit ${showActiveContent === 'E-Commerce' ? 'text-white bg-[#FF9315] p-1 px-5' : 'bg-white p-1 px-5 hover:text-white hover:bg-[#FF9315]'}`}>
                                E-Commerce
                            </button >

                            <button onClick={() => toggleContent('WordPress')} className={`focus: outline-none font-bold sm:text-lg text-xs rounded-md drop-shadow-xl w-fit px-7 ${showActiveContent === 'WordPress' ? 'text-white bg-[#FF9315] p-1 px-5' : 'bg-white p-1 px-5 hover:text-white hover:bg-[#FF9315]'}`}>
                                WordPress
                            </button >

                            <button onClick={() => toggleContent('HTML')} className={`focus: outline-none  font-bold sm:text-lg text-xs rounded-md drop-shadow-xl w-fit px-12 ${showActiveContent === 'HTML' ? 'text-white bg-[#FF9315] p-1 px-5' : 'bg-white p-1  hover:text-white hover:bg-[#FF9315]'}`}>
                                HTML
                            </button >
                        </div >
                    </div >
                </div>
                <div>
                    {showActiveContent === 'E-Commerce' &&
                        <div>
                            <div className='flex flex-col lg:-ml-28'>
                                <h1 className='text-6xl text-gray-500 font-semibold'>E-COMMERCE</h1><br />
                                <hr className='h-3 bg-gradient-to-r from-[#D1A25E] ml-20 to-transparent ' /><br />
                                <p className='text-start'>Your gateway to e-commerce success. Expert solutions from design to marketing. Partner with us for seamless growth and profitability. Explore our portfolio for proof of our expertise.</p><br />
                                <button className='bg-white text-[#D1A25E] border-2 border-[#D1A25E] p-3  w-fit px-5 rounded-md hover:text-white hover:bg-[#D1A25E]'>Enquire Now</button>
                                <div className='w-full h-full flex justify-end '>
                                    <Image src={ecommerce} alt='' className='w-[70%]' />
                                </div>
                            </div>
                        </div>
                    }
                    {showActiveContent === 'WordPress' &&
                        <div>
                            <div className='flex flex-col lg:-ml-28'>
                                <h1 className='text-5xl text-gray-500 font-semibold '>WordPress</h1><br />
                                <hr className='h-3 bg-gradient-to-r from-[#D1A25E] ml-20 via-[#D1A25E] to-transparent ' /><br />
                                <p>Your gateway to e-commerce success. Expert solutions from design to marketing. Partner with us for seamless growth and profitability. Explore our portfolio for proof of our expertise.</p><br />
                                <button className='bg-white text-[#D1A25E] border-2 border-[#D1A25E] p-3  w-fit px-5 rounded-md hover:text-white hover:bg-[#D1A25E]'>Enquire Now</button>
                                <div className='w-full h-full flex justify-end '>
                                    <Image src={wordpress} alt='' className='w-[70%]' />
                                </div>
                            </div>
                        </div>
                    }
                    {showActiveContent === 'HTML' &&
                        <div>
                            <div className='flex flex-col lg:-ml-28'>
                                <h1 className='text-5xl text-gray-500 font-semibold '>HTML</h1><br />
                                <hr className='h-3 bg-gradient-to-r from-[#D1A25E] ml-20 via-[#D1A25E] to-transparent ' /><br />
                                <p>Your gateway to e-commerce success. Expert solutions from design to marketing. Partner with us for seamless growth and profitability. Explore our portfolio for proof of our expertise.</p><br />
                                <button className='bg-white text-[#D1A25E] border-2 border-[#D1A25E] p-3  w-fit px-5 rounded-md hover:text-white hover:bg-[#D1A25E]'>Enquire Now</button>
                                <div className='w-full h-full flex justify-end '>
                                    <Image src={html} alt='' className='w-[70%]' />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Web