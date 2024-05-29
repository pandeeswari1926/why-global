import React, { useEffect, useState } from "react";
import Headingsection from "./Heading";
import { useSearchParams } from "next/navigation";
import SanityClient from "../SanityClient";
import { Helmet } from "react-helmet";
import Loader from "../home/Loader";
import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ImNext } from "react-icons/im";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface Alldata{
  metaTitle:string,
  MetaDescription:string,
    FocusKeyword:string,
    MetaURL:string,
    MetaData:string,
  content:{venue:string,title:string,Image:[{image:{asset:{url:string}}}]}
}
const Page = () => {
  const[shows,setshows]=useState(false)
  const [alldata,setalldata]=useState<Alldata|null>(null)
  const datas=useSearchParams()
  const search=datas.get('name')
  const id =datas.get('id')
  const [loader,setLoader]=useState(true)
  const[index,setindex]=useState(0)
  const[image,setimage]=useState([])
  useEffect(()=>{
   const getdata=async()=>{
   await SanityClient.fetch(`*[_type == "events" && content[${id}].title==${JSON.stringify(search)}]{
    metaTitle,
    MetaDescription,
    FocusKeyword,
    MetaURL,
    MetaData,
    content[${id}]{
      title,
      venue,
      Image[]{
        image{
          asset->{
            url
          }
        }
      }
    }
   }`).then((res)=>{
    console.log(res[0],'kk')
    setalldata(res[0])
    setimage(res[0].content.Image)
    setLoader(false)
    
   })
   } 
   getdata()
  },[])
  function move(index:any){
    setshows(true)
    setindex(index)

  }
  function next(){
    setindex((prev)=>(prev + image?.length+1)%image?.length)
  }
  function prev(){
    setindex((prev)=>(prev + image?.length-1)%image?.length)
  }
  
  return (
    <div className="">
      {loader==true?<Loader />:<div>    <>
      <Helmet>
        <title property="og:title">{alldata ? alldata.metaTitle : ""}</title>
        <meta
          property="og:description"
          content={alldata ? alldata.MetaDescription : ""}
        />
        <meta property="og:url" content={alldata ? alldata.MetaData : ""} />
        <meta
          name="keywords"
          content={alldata ? alldata.FocusKeyword : ""}
        ></meta>
        <meta name="alldata" content={alldata ? alldata.MetaURL : ""}></meta>
      </Helmet>
      <div className="w-full md:h-60 h-32 relative">
        <div className="w-full h-full absolute top-0 left-0">
        <img src="./bgs.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute w-full flex flex-col gap-2 items-center justify-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="xl:text-6xl md:text-6xl xs:text-3xl text-[1.4rem] text-center bg-gradient-to-b from-white to-transparent text-transparent font-bold bg-clip-text">
            {alldata && alldata?.content?.title}
          </p>
          <p className="text-white xl:text-3xl md:text-2xl xs:text-lg text-sm font-medium">
            {alldata&&alldata?.content?.venue}
          </p>
        </div>
      </div>
    </>
      <div className="w-full flex flex-wrap gap-10 justify-center mt-5 cursor-pointer p-5 lg:p-0">
        {alldata&&alldata.content&&alldata.content.Image&&alldata.content.Image.map((image,index)=>(
          <div key={index} onClick={()=>move(index)} className="lg:w-96 lg:h-64 w-full group relative transition-all duration-200 overflow-hidden h-full">
          <img
            src={image?.image?.asset?.url}
            style={{
              transition: "ease-in-out 0.3s",
            }}
            className="w-full hover:scale-105 hover:brightness-75  transition-all h-full"
          ></img>
        </div>
        ))}
        
      </div></div>}
     
        {shows==true&&(
        <div className="fixed z-50   top-0 left-0 w-full h-full">
          <div className="bg-black w-full h-full bg-opacity-70 relative">
            <IoClose onClick={()=>setshows(false)}   className="absolute cursor-pointer size-10 text-white right-5  top-5 " />
             <div className="w-full flex flex-row h-full justify-between items-center">
             < MdOutlineNavigateBefore onClick={prev} className="cursor-pointer size-10 text-white right-5" />
              <div className="md:w-[70%] md:h-[80%] w-[90%] h-[90%]"><img src={alldata?.content?.Image[index]?.image?.asset?.url} className="w-full  object-contain h-full"></img></div>
             
              < MdOutlineNavigateNext  onClick={next} className=" size-10 text-white cursor-pointer right-5" />
             </div>
          </div>
          </div>
        )}
      </div>
   
  
  );
};

export default Page;
