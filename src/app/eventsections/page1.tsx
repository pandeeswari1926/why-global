import React, { useEffect, useState } from "react";
import Headingsection from "./Heading";
import { useSearchParams } from "next/navigation";
import SanityClient from "../SanityClient";
import { Helmet } from "react-helmet";
import Loader from "../home/Loader";
interface Alldata{
  metaTitle:string,
  MetaDescription:string,
    FocusKeyword:string,
    MetaURL:string,
    MetaData:string,
  content:{title:string,Image:[{image:{asset:{url:string}}}]}
}
const page = () => {
  const [alldata,setalldata]=useState<Alldata|null>(null)
  const datas=useSearchParams()
  const search=datas.get('name')
  const id =datas.get('id')
  const [loader,setLoader]=useState(true)
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
    setLoader(false)
    
   })
   } 
   getdata()
  },[])
  return (
    <div>
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
        <div className="absolute w-full flex flex-col items-center justify-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="xl:text-8xl md:text-6xl xs:text-3xl text-xl  bg-gradient-to-b from-white to-transparent text-transparent font-bold bg-clip-text">
            {alldata && alldata?.content?.title}
          </p>
          <p className="text-white xl:text-4xl md:text-2xl xs:text-lg text-sm font-medium">
            {alldata&&alldata?.content?.title}
          </p>
        </div>
      </div>
    </>
      <div className="w-full flex flex-wrap gap-10 justify-center mt-5 cursor-pointer p-5 lg:p-0">
        {alldata&&alldata.content&&alldata.content.Image&&alldata.content.Image.map((image,index)=>(
          <div className="lg:w-96 w-full group relative transition-all duration-200 overflow-hidden h-full">
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
   
    </div>
  );
};

export default page;
