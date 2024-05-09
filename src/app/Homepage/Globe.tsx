import React from 'react'
import globe from '../../../public/globe.png'
import Image from 'next/image'

function Globe() {
  return (
    <div className=''>
      <div className='w-full'>
        <div className='lg:px-10 px-5 lg:text-start text-center flex flex-col  gap-4 '>
          <p className='text-xl lg:pt-10 pt-5 lg:pl-16 lg:text-start text-center font-semibold text-primarycolor'>OUR SERVICES</p>
          <h1 className="lg:pl-16 lg:text-start text-center font-semibold pt-3 text-sm sm:text-lg lg:text-[30px] text-gray-500 lg:leading-[50px] lg:w-[60%]">WE PROVIDE BEST SOLUTIONS FOR PREPARING YOUR SUCCESS</h1>
        </div>
      </div>
      <div className='items-center w-full  justify-center lg:block hidden '>
        <img src="./globegif.gif" alt='Globe' className='w-full' />
      </div>
      <div className='w-full items-center justify-center mx-auto  lg:hidden block'>
        <img src="./globegif.gif" alt='Globe' className='w-full' />
      </div>
    </div>
  )
}

export default Globe