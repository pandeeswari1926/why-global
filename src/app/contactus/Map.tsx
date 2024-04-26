import React from 'react'
import Image from 'next/image'
import Whyglobalservicesworldmapimg from '../asset/whyglobalservicesworldmapimg.png'

const Map = () => {
  return (
   <div className='flex flex-col gap-5 items-center py-10 '>
      <h1 className='lg:text-4xl sm:text-2xl text-xl font-semibold text-[#3E3E3E]'>We’re Global and Growing</h1>
      <p className='text-[#808080] lg:text-lg text-sm lg:px-0 pb-10 px-10'>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built</p>
      <Image src={Whyglobalservicesworldmapimg} alt='map'/>
   </div>
  )
}

export default Map