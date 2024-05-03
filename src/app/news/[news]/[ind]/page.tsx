'use client'
import React from "react";
import { FaCalendar } from "react-icons/fa";

function Page({params}:any){
    console.log(params.ind);
    const data=params.ind
    const decodedUrl = decodeURIComponent(data.replace(/\+/g, ' '));
    return(
        <div className="h-screen w-full">
         
            <div className="w-full h-full flex lg:flex-row flex-col relative p-5">
                <div className="lg:w-[70%] w-full">
                    <div className="w-full">
                        <p className="md:text-3xl text-xl font-semibold">{decodedUrl}</p>
                        <div className="lg:flex-row flex flex-col w-full justify-between items-center">
                            <p className="text-lg">sunil Kumar</p>
                            <p className="text-sm date flex gap-2  items-center"><span>12/12/12 Sat</span> <FaCalendar className="size-4" /></p>
                        </div>
                        <img src="./profile.png"></img>
                        <div className="flex flex-col gap-5">
                            <p>Content</p>
                            <p>Content</p>
                            <p>Content</p>
                        </div>


                    </div>
                </div>
                <div className="lg:w-[30%] w-full sticky">

                </div>
              
            </div>
            
        </div>
    )
}
export default Page;
