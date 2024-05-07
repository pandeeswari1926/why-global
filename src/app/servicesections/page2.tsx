import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface Alldata{
  banner:[{title:string;
content:string;
Image:{asset:{url:string}}
  }]
}
const page = () => {
  const datas=useSearchParams()
  const Search=datas.get('name')
  const[alldata,setalldata]=useState<Alldata[] |[]>([])
  useEffect(()=>{
    const getdata=async()=>{
      await SanityClient.fetch(`*[_type=="servicespage"&& category->Categoryname==${JSON.stringify(Search)}]{
        banner[]{
          title,
          content,
          Image{
            asset->{
              url
            }
          }
        }
      }`).then((res)=>{
             console.log(res);
             setalldata(res)
      })
    }
    getdata()
  },[Search])
  return (
    <article className="mt-10">
        <section className="">
            <h2 className="xs2:text-5xl xs:text-4xl text-2xl bg-clip-text sha text-center">{Search}</h2>
        </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
        {alldata&&alldata.map((item:any,index:any)=>(
           <div className="relative mt-20 flex w-80 h-[350px]  flex-col rounded-xl bg-slate-200 mx-3 xs:mx-0 bg-clip-border text-gray-700 shadow-lg">
           <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-400 to-primarycolor ">
             <img
               src={item?.banner[0]?.Image?.asset?.url}
               alt=""
               className="object-cover w-full h-full"
             />
           </div>
           <div className="p-6 h-[50%] overflow-hidden">
             <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
             {item?.banner[0]?.title}
             </h5>
             <p className="block font-sans text-base  overflow-hidden  font-light leading-relaxed text-inherit antialiased">
             {item?.banner[0]?.content}
             </p>
           </div>
           <div className="p-6 pt-3">
            <Link href={{pathname:'/ServicesIndividual',query:{name:item?.banner[0]?.title}}}>
             <button
               data-ripple-light="true"
               type="button"
               className="select-none rounded-lg bg-primarycolor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-200 transition-all hover:shadow-lg hover:shadow-orange-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
             >
               Read More
             </button>
             </Link>
           </div>
         </div>
        ))}
       
        
      </section>
    </article>
  );
};
export default page;
