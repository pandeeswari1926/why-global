import React from 'react'
import Image from 'next/image';
import IOTpic from '../../../public/IOTpic.png';

const Iot = () => {
    return (
        <>
            <div className='sm:m-10 m-5 py-5 sm:py-0 justify-items-center grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8'>
                <div className='space-y-5 font-sans xl:w-[87%]'>
                    <h1 className='text-[#FF9315] sm:text-xl font-semibold'>MAKING THE WORLD SMARTER, ONE DEVICE AT A TIME</h1>
                    <h1 className='sm:text-3xl text-lg text-gray-500 font-bold'>INTERNET OF THINGS</h1>
                    <p className='text-sm text-gray-500 text-justify'>Start with a definition of IOT, explaining that it&apos;s a network of interconnected devices that communicate and exchange data over the internet, without requiring human-to-human or human-to-computer interaction.</p>
                    <p className='text-sm text-gray-500 text-justify'>Explain the key components necessary for IoT systems, including sensors and actuators to collect and act on data, connectivity options like Wi-Fi, Bluetooth, or cellular networks, data processing and analytics platforms for deriving insights, and user interfaces for interacting with IoT devices.
                    </p>
                    <p className='text-sm text-gray-500 text-justify'> Provide real-world examples and case studies showcasing successful implementations of IoT solutions, highlighting the benefits achieved and lessons learned from each deployment.</p>
                </div>
                <div className='w-full h-full'>
                    <Image src={IOTpic} alt='' className='w-full' />
                </div>
            </div>
        </>
    )
}

export default Iot