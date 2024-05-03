'use client'
import SanityClient from "@/app/SanityClient";

import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";

interface newsDetails{
    title:string
    subTitle:string,

    postDate:string
    contentAndImage:[{
        image:{asset:{url:string}},
        contents:[{content:string}]
    }]
}

function Page({params}:any){
    console.log(params.ind);
    const[alldata,setalldata]=useState<newsDetails|null>(null)
    const data=params.ind
    const decodedUrl = decodeURIComponent(data.replace(/\+/g, ' '));
    useEffect(()=>{
        const getdata=async()=>{
         await SanityClient.fetch(`*[_type=="newsDetails" && title==${JSON.stringify(decodedUrl)}]{
            title,
            subTitle,
            postDate,
            contentAndImage[]{
                image{asset->{url}},
                contents[]{content}
            }
         }`).then((res:any)=>{
console.log(res)
setalldata(res[0])
         })
        }
        getdata();
    },[])
    return(
        <div className="w-full p-5">
         
            <div className="w-full h-full flex lg:flex-row flex-col relative p-5">
                <div className="lg:w-[60%] w-full">
                    <div className="w-full flex flex-col gap-5 h-full">
                        <p className="md:text-3xl text-xl font-semibold">{alldata&&alldata.title}</p>
                        <div className="lg:flex-row flex flex-col w-full justify-between items-center">
                            <p className="text-sm">{alldata&&alldata.subTitle}</p>
                            <p className="text-sm date flex gap-2 justify-center  items-start"><span>{alldata&&alldata.postDate}</span> <FaCalendar className="size-4" /></p>
                        </div>
                        {alldata&&alldata.contentAndImage&&alldata.contentAndImage.map((item:any,index:any)=>(
                            <div className="flex flex-col gap-5">
                        <div className="w-full h-[400px]"><img src={item?.image?.asset?.url} className="w-full h-full"></img></div>
                        <div className="flex flex-col gap-5">
                            {item&& item.contents.map((list:any,indess:any)=>(
                                   <p className="text-justify">{list.content}</p>
                            ))}
                           
                            
                        </div>
                        </div>
                        ))}
                        
                        


                    </div>
                </div>
                {/* <div className="lg:w-[30%] w-full sticky">

                </div> */}
              
            </div>
            
        </div>
    )
}
export default Page;
