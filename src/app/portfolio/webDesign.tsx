"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import live from '../../../public/WGS LIVE PICS.gif';
import SanityClient from '../SanityClient';

const WebDesign = () => {
    useEffect(()=>{
        SanityClient.fetch(`*[_type=='portfolio']{
            webDesign[]{
                heading,
                subHeading,
                content[]{
                    Content,
                },
                image{
                    asset->{
                        url
                    }
                },
            }
        }`).then((res)=>{
            console.log(res)
        })
    },[])
    return (
        <>
            <div className='m-5 sm:m-10 justify-items-center grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10'>
                <div className='space-y-5 font-sans xl:w-[87%]'>
                    <h1 className='text-[#FF9315] sm:text-xl font-semibold'>ONE PIXEL AT A TIME</h1>
                    <h1 className='sm:text-3xl text-lg text-gray-500 font-bold'>WEB DESIGN</h1>
                    <p className='text-sm text-justify text-gray-500'>We understand that your website is more than just a digital storefront; it&apos;s your online identity, your brand ambassador in the vast world of the internet. That&apos;s why we approach each project with meticulous attention to detail, ensuring that every element is thoughtfully designed to reflect your unique brand personality and resonate with your target audience.</p>
                    <p className='text-sm text-gray-500 text-justify'>Whether you&apos;re a small startup looking to make a big splash or an established business aiming to elevate your online presence, we&apos;ve got you covered. From sleek and modern designs to bold and unconventional layouts, we tailor our approach to suit your specific needs and objectives.
                    </p>
                    <p className='text-sm text-gray-500 text-justify'>But we don&apos;t just stop at aesthetics. Our websites are not only visually stunning but also highly functional and user-friendly. We employ the latest web technologies and best practices to ensure seamless navigation, fast loading times, and optimal performance across all devices and platforms.</p>
                </div>
                <div className='w-full h-full'>
                    <img src='./WGS LIVE PICS.gif' alt='' className='w-full' />
                </div>
            </div>
        </>
    )
}

export default WebDesign