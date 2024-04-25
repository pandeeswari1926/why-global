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
            <div className='m-10 grid lg:grid-cols-2 grid-cols-1 relative gap-5'>
                <div className='lg:ml-20 lg:mx-0 mx-auto mt-28'>
                    <div className='flex flex-row relative  w-fit'>
                        <div className='p-5 shadow-lg shadow-gray-300 rounded-full'>
                        <div className='border-2 border-[#FF9315] w-48 h-48 drop-shadow-xl rounded-full flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                            <h1 className='text-[#FF9315]  font-semibold'>WEB DEVELOPMENT</h1>
                            </div>
                        </div>
                        </div>
                        <div className='flex flex-col absolute -translate-x-1/2 -translate-y-1/2 right-0 top-1/2 -mr-60 gap-5'>
                            <button onClick={() => toggleContent('E-Commerce')} className={`w-40 rounded-lg py-2 drop-shadow-lg ${showActiveContent === 'E-Commerce' ? 'text-white bg-[#FF9315] ' : 'bg-white  hover:text-white hover:bg-[#FF9315]'}`}>
                                E-Commerce
                            </button >
                            <button onClick={() => toggleContent('WordPress')} className={`ml-10 w-40 rounded-lg py-2 drop-shadow-lg ${showActiveContent === 'WordPress' ? 'text-white bg-[#FF9315] ' : 'bg-white  hover:text-white hover:bg-[#FF9315]'}`}>
                                WordPress
                            </button >
                            <button onClick={() => toggleContent('HTML')} className={`w-40 rounded-lg py-2 drop-shadow-lg ${showActiveContent === 'HTML' ? 'text-white bg-[#FF9315] p-1' : 'bg-white hover:text-white hover:bg-[#FF9315]'}`}>
                                HTML
                            </button >
                        </div >
                    </div >
                </div>
                <div>
                    {showActiveContent === 'E-Commerce' &&
                        <div>
                            <div className='flex flex-col lg:-ml-28'>
                                <h1 className='text-xl sm:text-6xl text-gray-500 font-semibold'>E-COMMERCE</h1><br />
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
                                <h1 className='text-xl sm:text-6xl text-gray-500 font-semibold '>WordPress</h1><br />
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
                                <h1 className='text-xl sm:text-6xl text-gray-500 font-semibold '>HTML</h1><br />
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