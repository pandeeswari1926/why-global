import React from 'react'
import globe from '../../../public/globe.png'
import Image from 'next/image'

function Globe() {
  return (
    <>
      <div className='w-full'>
        <div className='lg:p-10 p-5 lg:text-start text-center flex flex-col  gap-4 lg:gap-7'>
          <p className='text-2xl text-primarycolor font-semibold'>OUR SERVICES</p>
          <h1 className="font-semibold text-sm sm:text-xl lg:text-2xl lg:text-left text-center lg:w-[60%] w-full">WE PROVIDE BEST SOLUTIONS FOR PREPARING YOUR SUCCESS</h1>
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