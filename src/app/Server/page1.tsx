'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import SanityClient from "../SanityClient"
import Link from "next/link"
import Loader from "../home/Loader"


interface Banner{
    title:string,
    content:string,
    Image:{asset:{url:string}}
}
interface Alldata{
    banner:Banner[];
    Secondsection:[{title:string,Secondsubtitle:string,content:string,Image:{asset:{url:string}}}],
    thirdsection:[{maintitle:string,title:string,content:string,Image:{asset:{url:string}}}],
    thirdtitle:string
}
function Page(){
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    const[loader,setLoader]=useState(true)
    const[alldata,setalldata]=useState<Alldata|null>(null)
 useEffect(()=>{
    console.log(search);
    
 const getdata=async()=>{
  await SanityClient.fetch(`*[_type=='servicespage' && banner[0].title==${JSON.stringify(search)}]{
    thirdtitle,
    banner[]{
      title,
      content,
      Image{
        asset->{
          url
        }
      }
    },
  Secondsection[]{
    title,
    Secondsubtitle,
    content,
    Image{
      asset->{
        url
      }
    }
  },
  thirdsection[]{
    maintitle,
      title,
      content,
      Image{
      asset->{
        url
      }
      }
  }
  }`).then((res)=>{
    if(res.length>0){
        setalldata(res[0]);
    console.log(res[0]);
    setLoader(false)
    }
    
    
  })
 }
 getdata()

 },[search])
 return (
    
    (loader==true?<Loader />:<div className="overflow-hidden ">
    <div className="lg:h-[95vh]  h-[600px] relative w-full">
    <img className="absolute lg:flex hidden bottom-0" src="./sideline.png"></img>
    <img className="absolute lg:flex hidden left-1/2 top-5" src="./circ.png"></img>
    <img className="absolute lg:flex hidden left-1/4 bottom-10" src="./circ.png"></img>
    <div className="lg:w-[70%] overflow-hidden w-full  h-full lg:rounded-full shadow-primarycolor bg-gray-200 lg:drop-shadow-2xl absolute lg:top-5 lg:-right-[20%]">
   
        <img src={alldata?.banner[0]?.Image?.asset?.url} className="w-full h-full lg:flex hidden"></img>
        <img className="w-full h-full lg:hidden object-cover flex" src="./videogif.gif"></img>
    </div>
    <div className="absolute bottom-0 left-0 els w-full lg:hidden flex xs:h-full h-[70%]"></div>
    <div className="absolute right-0 bottom-0 w-full xs:h-full  h-[70%] wh lg:hidden flex "></div>
        {/* Display the value of Services */}
        <div className="lg:text-6xl text-2xl xs:text-3xl w-full xl:text-7xl absolute   font-semibold lg:w-[40%]  lg:leading-[70px] text-wrap lg:top-1/2 lg:left-10   top-1/2 left-1/2 lg:-translate-x-0 lg:-translate-y-1/2 -translate-x-1/2  -translate-y-1/2 lg:text-start text-center "><p className="sha bg-clip-text  w-full text-wrap mb-5">{alldata?.banner[0]?.title}</p> 
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-4 ">
        <p className="text-sm lg:text-gray-500 xl:text-lg text-white w-[90%]  leading-6 font-medium">{alldata?.banner[0]?.content}</p>
        <Link href={'/contactus'}><button className="lg:bg-transparent bg-white border-2 border-white lg:border-black w-fit hover:bg-primarycolor duration-200 hover:text-white rounded-lg text-sm px-4 py-3">EXPLORE</button></Link>
        </div>
        
        </div>
   
        
    </div>
    <div className="flex justify-between  items-center md:flex-row flex-col w-full md:p-8 p-5">
      <div className="flex flex-col gap-5 md:text-start text-center md:w-1/2">
        <h1 className="text-3xl font-semibold">{alldata&&alldata.Secondsection[0]&&alldata.Secondsection[0].title}</h1>
        <p className="text-xl text-primarycolor">{alldata?.Secondsection[0]?.Secondsubtitle}</p>
        <p className="text-justify">{alldata?.Secondsection[0]?.content}</p>
        </div>
      <div className="md:w-1/2">
        <img src={alldata?.Secondsection[0]?.Image?.asset?.url} alt="" />
      </div>
    </div>
    <div className="w-full py-5">
        <div className="w-full flex flex-col gap-5 ">
   
            <h1 className="text-center md:text-3xl sm:text-2xl text-xl font-semibold">{alldata&&alldata?.thirdtitle}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-10 p-8 justify-items-center">
            {alldata?.thirdsection?.map((item:any,index:any)=>(
   <div key={index} className="flex justify-center items-center p-3 shadow-2xl drop-shadow-2xl flex-col gap-5 xs:w-72 w-full h-80 rounded-lg border-2 border-primarycolor">
   <img src={item?.Image?.asset?.url} alt="" className="size-14 object-contain" />
   <h1 className="text-xl font-semibold text-center">{item&& item?.title}</h1>
   <p className="text-gray-400 text-sm text-justify">{item&& item?.content}</p>
   </div>
            ))}
               
              
   
   
            </div>
   
        </div>
    </div>
    <div className="flex flex-col justify-center items-center overflow-hidden py-5">
   <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
   <img
    src='./bgorange1.png'
    alt=""
    className="w-full h-full object-cover"
   />
   <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
    <h2 className="font-semibold sm:text-5xl text-3xl mb-4 text-white">
      Connect with Us!
    </h2>
    <Link href={'/contactus'}>
    <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-20 py-4 font-semibold sm:text-xl text-lg">
      Get Started
    </button></Link>
    
   </div>
   </div>
   </div>
   </div>)
 
     
 );
}

export default Page