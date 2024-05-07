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
        <div className='flex flex-col lg:items-start items-center justify-center gap-5 pt-10'>
            <h1 className='font-bold text-xl lg:text-2xl text-[#FF8900] lg:px-10 '>OUR CLIENTS</h1>
            <main className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  lg:gap-10 gap-5 px-10'>
                <div className='flex flex-col gap-2'>
                    <div className='p-2 grid sm:grid-cols-2 grid-cols-2 gap-10' >
                        <img src="./kushlogo.png" alt='' className=' w-32 bg-white' />
                        <img src="./riofin.png" alt='' className='  bg-white md:hidden block' />
                    </div>
                    <div className='grid grid-cols-2  md:gap-0 gap-10 p-2 lg:mr-44 lg:justify-items-start  justify-items-center  items-center '>
                        <img src="./riofin.png" alt='' className='  bg-white md:block hidden' />
                        <img src="./whytap.png" alt='' className=' bg-white' />
                        <img src="./hrc.png" alt='' className=' bg-white md:hidden block' />
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-2 lg:justify-items-start justify-items-center  items-center gap-10 p-2 '>
                        <img src="./hrc.png" alt='' className=' bg-white md:block hidden' />
                        <img src="./sennata.png" alt='' className=' bg-white' />
                        <img src="./ehs.png" alt='' className=' bg-white' />
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-2 lg:justify-items-start justify-items-center  items-center gap-10 p-2'>
                        <img src="./five.png" alt='' className=' bg-white' />
                        <img src="./w8loss.png" alt='' className=' bg-white' />
                        <img src="./antimalaries.png" alt='' className=' bg-white ' />
                        <img src="./abhis.png" alt='' className=' bg-white' />
                    </div>
                </div>
                <div className=''>
                    <img src="./map.png" alt='' />
                    <hr className='w-[50%] h-1 bg-[#FF8900] mb-10 ml-[50%] md:block hidden' />
                </div>
            </main >
        </div>
    )
}

export default Client