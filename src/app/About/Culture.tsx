"use client"
import React from 'react'
import Image from 'next/image'
import ruban from '../../../public/ruban.png'
function Culture() {
  return (
    <div>
      <div className='pt-10 flex w-full md:flex-row flex-col '>
       <div className='w-[25%] h-[300px] rad  bg-black'></div>
       <div>
        <div className='relative w-full flex flex-col'>
          <div><Image src={ruban} alt=''></Image></div>
        <div className='w-full'><p>Ethical Responsibility<br></br><span className='text-sm'>Ethical responsibility and social impact define our culture.</span></p></div>
        </div>
       </div>
       <div></div>
      </div>
    </div>
  )
}

export default Culture
