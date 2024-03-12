"use client";
import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import plus from '../asset/+.png';

const World = () => {
    return (
        <>
            <section className='bg-world bg-cover h-[10%] w-full p-10 md:p-20 flex flex-col text-center text-white grayscale-'>
                <h1 className='text-lg sm:text-xl md:text-2xl font-bold pb-[10%]'>LET’S TALK ABOUT OUR BUSINESS GROWTH IN<br /> CONSULTING SOLUTION</h1>
                <section className='grid grid-cols-1 lg:grid-cols-2'>
                    <section className='flex flex-col pt-8 pb-[10%]'>
                        <div className='flex text-center justify-center'>
                            <h1 className='text-7xl md:text-9xl font-bold'><CountUp start={0} end={100} duration={3} delay={0} /></h1>
                            <Image src={plus} alt='plus icon' className='h-5 w-5' /><br />
                        </div>
                        <p className=''>Learn More About Our Success Stories</p>
                    </section>
                    <section className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                        <section className='flex flex-col'>
                            <div className='flex text-center justify-center'>
                                <h1 className='text-4xl md:text-7xl'><CountUp start={0} end={100} duration={3} delay={0} /></h1>
                                <Image src={plus} alt='plus icon' className='h-5 w-5' /><br />
                            </div>
                            <p className=''>About Our Success Stories</p>
                        </section>
                        <section className='flex flex-col'>
                            <div className='flex text-center justify-center'>
                                <h1 className='text-4xl md:text-7xl'><CountUp start={0} end={100} duration={3} delay={0} /></h1>
                                <Image src={plus} alt='plus icon' className='h-5 w-5' /><br />
                            </div>
                            <p className=''>About Our Success Stories</p>
                        </section>
                        <section className='flex flex-col'>
                            <div className='flex text-center justify-center'>
                                <h1 className='text-4xl md:text-7xl'><CountUp start={0} end={100} duration={3} delay={0} /></h1>
                                <Image src={plus} alt='plus icon' className='h-5 w-5' /><br />
                            </div>
                            <p className=''>About Our Success Stories</p>
                        </section>
                        <section className='flex flex-col'>
                            <div className='flex text-center justify-center'>
                                <h1 className='text-4xl md:text-7xl'><CountUp start={0} end={100} duration={3} delay={0} /></h1>
                                <Image src={plus} alt='plus icon' className='h-5 w-5' /><br />
                            </div>
                            <p className=''>About Our Success Stories</p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default World
