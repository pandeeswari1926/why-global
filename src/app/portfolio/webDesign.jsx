import React from 'react'
import Image from 'next/image';
import live from '../../../public/WGS LIVE PICS.gif';

const WebDesign = () => {
    return (
        <>
            <div className='m-10 md:pl-20 pl-5 grid md:grid-cols-2 grid-cols-1'>
                <div className='space-y-5 font-sans md:w-[87%] md:ml-0 ml-auto'>
                    <h1 className='text-[#FF9315] text-xl font-semibold'>ONE PIXEL AT A TIME</h1>
                    <h1 className='text-3xl text-gray-500 font-bold'>WEB DESIGN</h1>
                    <p className='text-lg text-gray-500'>We understand that your website is more than just a digital storefront; it&apos;s your online identity, your brand ambassador in the vast world of the internet. That&apos;s why we approach each project with meticulous attention to detail, ensuring that every element is thoughtfully designed to reflect your unique brand personality and resonate with your target audience.</p>
                    <p className='text-lg text-gray-500'>Whether you&apos;re a small startup looking to make a big splash or an established business aiming to elevate your online presence, we&apos;ve got you covered. From sleek and modern designs to bold and unconventional layouts, we tailor our approach to suit your specific needs and objectives.
                    </p>
                    <p className='text-lg text-gray-500'>But we don&apos;t just stop at aesthetics. Our websites are not only visually stunning but also highly functional and user-friendly. We employ the latest web technologies and best practices to ensure seamless navigation, fast loading times, and optimal performance across all devices and platforms.</p>
                </div>
                <div className='w-full h-full'>
                    <Image src={live} alt='' className='w-full -mt-14' />
                </div>
            </div>
        </>
    )
}

export default WebDesign