import React from 'react'
import globe from '../asset/globe.png'
import Image from 'next/image'

function Globe() {
  return (
    <>
      <div>
        <div className='p-10 flex flex-col  gap-7'>
          <p className='text-2xl text-primarycolor font-semibold'>OUR SERVICES</p>
          <h1 className="font-bold text-2xl lg:text-4xl text-left lg:w-[50%] w-full">WE PROVIDE BEST SOLUTIONS FOR PREPARING YOUR SUCCESS</h1>
        </div>
      </div>
      <div className='w-[50%] h-[550px] flex-col items-center justify-center lg:block hidden gl'>
        <Image src={globe} alt='Globe' className='w-full' />
      </div>
      <div className='w-full rt h-[50%] flex-col items-center justify-center mx-auto  lg:hidden block'>
        <Image src={globe} alt='Globe' className='w-full' />
      </div>
    </>
  )
}

export default Globe