'use client';
import React from 'react'
import logo from '../../../public/logo.png';
import riofin from '../../../public/riofin.png';
import whytap from '../../../public/whytap.png';
import hrc from "../../../public/hrc.png";
import sennata from '../../../public/sennata.png';
import ehs from '../../../public/ehs.png';
import Image from 'next/image';
import five from '../../../public/five.png';
import w8loss from '../../../public/w8loss.png';
import antimalaries from '../../../public/antimalaries.png';
import abhis from "../../../public/abhis.png";
import map from '../../../public/map.png';

function Client() {
    return (
        <>
            <h1 className='font-bold text-2xl text-[#FF8900] p-10'>OUR CLIENTS</h1>
            <main className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-10 gap-5 sm:px-10 px-10'>
                <div className='md:p-10 p-2 mx-auto'>
                    <div className='p-2 grid sm:grid-cols-2 grid-cols-2 gap-10' >
                        <Image src={logo} alt='' className='md:pt-3 bg-white' />
                        <Image src={riofin} alt='' className='  bg-white md:hidden block' />
                    </div>
                    <div className='grid grid-cols-2  md:gap-0 gap-10 p-2 lg:mr-44 '>
                        <Image src={riofin} alt='' className='  bg-white md:block hidden' />
                        <Image src={whytap} alt='' className=' bg-white' />
                        <Image src={hrc} alt='' className=' bg-white md:hidden block' />
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-2 gap-10 p-2 '>
                        <Image src={hrc} alt='' className=' bg-white md:block hidden' />
                        <Image src={sennata} alt='' className=' bg-white' />
                        <Image src={ehs} alt='' className=' bg-white' />
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-10 p-2'>
                        <Image src={five} alt='' className=' bg-white' />
                        <Image src={w8loss} alt='' className=' bg-white md:pt-5 pt-7' />
                        <Image src={antimalaries} alt='' className=' bg-white md:pt-7' />
                        <Image src={abhis} alt='' className=' bg-white md:-mt-0 -mt-4 md:pt-7 ' />
                    </div>
                </div>
                <div className=''>
                    <Image src={map} alt='' />
                    <hr className='w-[50%] h-1 bg-[#FF8900] mb-10 ml-[50%] md:block hidden' />
                </div>
            </main >
        </>
    )
}

export default Client