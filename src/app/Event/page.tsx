"use client"
import React from "react"
import bgs from '../asset/bgs.png'
import Image from "next/image"
import vrclass from '../asset/vrclass.png'
function event(){


    return(
        <div>
          <div className="w-full h-36 relative">
<div className="w-full h-full absolute top-0 left-0"><Image src={bgs} alt="" className="w-full h-full" /></div>
          <div className="absolute w-full flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-7xl  bg-gradient-to-b from-white to-transparent text-transparent font-bold bg-clip-text">Experience the Difference</p>
            <p className="text-white">Exceptional Events, Every Time</p>
          </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="lg:w-[400px] relative lg:h-[300px]">
                <Image src={vrclass} className="w-full h-full" alt=""></Image>
                <div className="bg-primarycolor w-[90%] h-20">

                </div>

            </div>

          </div>
             
        </div>
    )
}
export default event