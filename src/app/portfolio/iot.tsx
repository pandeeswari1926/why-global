import React from 'react'
import Image from 'next/image';
import phone from '../../../public/wgs icons (11).png';
import laptop from '../../../public/wgs icons (12).png';

const Iot = () => {
    return (
        <>
            <div className='m-10 md:pl-20 pl-5'>
                <div className='flex md:flex-row flex-col'>
                    <div className='space-y-5 md:w-[70%] w-full'>
                        <h1 className='text-xl text-[#FF9315] font-semibold'>MAKING THE WORLD SMARTER, ONE DEVICE AT A TIME</h1>
                        <h1 className='text-3xl text-gray-500 font-bold'>INTERNET OF THINGS</h1>
                        <p className='text-gray-500'>Start with a definition of IoT, explaining that it&apos;s a network of interconnected devices that communicate and exchange data over the internet, without requiring human-to-human or human-to-computer interaction.
                        </p>
                        <p className='text-gray-500'>Start with a definition of IoT, explaining that it&apos;s a network of interconnected devices that communicate and exchange data over the internet, without requiring human-to-human or human-to-computer interaction.
                        </p>
                        <p className='text-gray-500'>Explain the key components necessary for IoT systems, including sensors and actuators to collect and act on data, connectivity options like Wi-Fi, Bluetooth, or cellular networks, data processing and analytics platforms for deriving insights, and user interfaces for interacting with IoT devices.</p>
                        <p className='text-gray-500'>Provide real-world examples and case studies showcasing successful implementations of IoT solutions, highlighting the benefits achieved and lessons learned from each deployment.</p>
                    </div>
                    <div className='bg-iotbg w-full h-full bg-cover'>
                        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center mt-10'>
                            <Image src={phone} alt='' className='w-[120%]' />
                            <Image src={laptop} alt='' className='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Iot