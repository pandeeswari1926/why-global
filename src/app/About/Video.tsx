import React from "react";
// import theatre from '../asset/theatre.gif'
import Image from "next/image";
import yicon from "../../../public/yicon.png"
function Video(){
    return(
        <div className="py-5">
            <div className="w-full relative h-screen">
            <div className=" w-fit flex flex-col h-full justify-around px-5 items-center text-white">
                <div className="flex flex-col justify-center items-center gap-3">
                <p className="md:text-3xl text-xl text-center font-semibold">OUR INFRASTRUCTURE</p>
                <p className="text-sm text-center text-md">ISO certification is a significant milestone for us</p>
                </div>
                <div className="w-20 h-20">
                    <Image src={yicon} className="w-full object-cover h-full" alt="" />
                </div>
                <p className="md:w-[70%] w-full text-center text-md">ISO certification is a significant milestone for us, signifying that we have implemented robust quality management systems and processes in line with international standards. It demonstrates our focus on delivering reliable and high-quality IT solutions that meet and exceed client expectations.</p>
              
            </div>
           <div className="w-full h-full -z-10  absolute top-0">
               {/* <Image alt="" src={theatre} className="w-full object-cover h-full" ></Image> */}
            </div>
            <div className="bg-black -z-10   opacity-65 absolute top-0 w-full h-full"></div>

            
            </div>
        </div>
    )

}
export default Video