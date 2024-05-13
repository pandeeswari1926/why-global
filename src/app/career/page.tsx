"use client";
import React, { useEffect, useState } from "react";
import Loader from "../home/Loader";
import Link from "next/link";
import SanityClient from "../SanityClient";
import { Modal } from "antd";
const BlockContent = require("@sanity/block-content-to-react");
interface Alldata {
  careerPage: [
    {rolesAndResponsibility:string;
      skill: string;
      description: string;
      shortDescription:string;
      experience: string;
      role: string;
      image: {
        asset: { url: string };
      };
    }
  ];
}

const page = () => {
  const [loader, setLoader] = useState(true);
  const [alldata, setalldata] = useState<Alldata[] | []>([]);
    const[isopen ,setisopen]=useState(false)
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=='career']{
        careerPage[]{
          rolesAndResponsibility,
            skill,
            description,
            shortDescription,
            experience,
            image{
                asset->{
                    url
                },
            },
            role,
        }
    }`
      )
        .then((res) => {
          console.log(res);
          setalldata(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getdata();
  }, []);
const[data,setdata]=useState(false)
const[opens,setopens]=useState(false)
  function handleClick(details:any){
    setdata(details)
    setopens(true)

  }
  return (
    <div className="mt-10">
      <div>
        <h2 className="xs2:text-5xl xs:text-4xl text-2xl bg-clip-text sha text-center">
          Career
        </h2>
      </div>
      <section className="">
        {alldata &&
          alldata.map((item: any, index: any) => (
            <div
              key={index}
              className=""
            >
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center pb-5">
                {item.careerPage.map((items: any, index: any) => (
                  <div className="relative mt-20 flex w-[90%] mx-auto xs:w-80 h-[400px]  flex-col rounded-xl bg-slate-200  xs:mx-0 bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-400 to-primarycolor ">
                      <img
                        src={items?.image?.asset?.url}
                        alt=""
                        className="object-cover  w-full h-full"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-1  line-clamp-5">
                      <h5 className="mb-2 block  text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {items?.rolesAndResponsibility}
                      </h5>
                      <p className="block  text-base  font-light leading-relaxed text-inherit antialiased">
                        <span className="text-blue-gray-900 font-semibold">Skill Required:</span>&nbsp;{items?.skill}
                      </p>
                      <p className="block  text-base  font-light leading-relaxed text-inherit antialiased">
                      <span className="text-blue-gray-900 font-semibold">Exprience:</span>&nbsp;{items?.experience}
                      </p>
                      <p className=" text-sm  font-light  antialiased">
                      <span className="text-blue-gray-900 text-base font-semibold">Description:</span>&nbsp;{items?.shortDescription}
                      </p>
                    </div>
                    <div className="p-6 pt-3 flex md:flex-row flex-col justify-between">
                 
                        <button
                        onClick={()=>setisopen(true)}
                          data-ripple-light="true"
                          type="button"
                          className="select-none rounded-lg bg-primarycolor mt-2 py-3 px-4 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-orange-200 transition-all hover:shadow-lg hover:shadow-orange-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          Apply Now
                        </button>
                        <button
                        onClick={()=>handleClick(items.description)}
                          data-ripple-light="true"
                          type="button"
                          className="select-none rounded-lg border-primarycolor bg-transparent mt-2 py-3 px-4 border text-center align-middle  text-xs font-bold uppercase text-black  transition-all hover:text-white hover:bg-primarycolor  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          INFO
                        </button>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </section>
      <div>  <Modal
      
      open={isopen}
      onCancel={()=>setisopen(false)}
      footer={false}
      >
        
          {/* <form className="py-10 w-[90%] mx-auto ">
            <label className="text-">Name</label>
          <input className="  w-full flex h-10 text-lg px-3  border" type="text" />
          </form> */}
          <form className="flex flex-col gap-2 w-[90%] py-10 mx-auto">
            <label className="xs:text-3xl text-xl font-semibold">Application Form</label>
      <input required placeholder="Full Name" className="  border-0 rounded-md p-2 mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" type="text" />
      <input required placeholder="Email" className="  border-0 rounded-md p-2 mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" type="email" />
      <input required placeholder="Phone Number" className="  border-0 rounded-md p-2 mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" type="text" />
      <input required placeholder="LinkedIn Profile URL" className="  border-0 rounded-md p-2 mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" type="text" />
      <textarea required placeholder="Cover Letter" className="  border-0 rounded-md p-2 mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" name="cover_letter"></textarea>
      <input required placeholder="Resume" className=" file:bg-primarycolor file:border-0 file:ring-0 file:outline-none  border-0 rounded-md h-10 text-white font-semibold file:text-white file:h-full mb-4  outline-none ring-1 ring-gray-300 focus:ring-primarycolor focus:shadow transition ease-in-out duration-150" type="file" />

      <button className="bg-primarycolor text-white font-bold py-2 px-4 rounded-md mt-4 hover:drop-shadow-lg hover:shadow-sm transition ease-in-out duration-150" type="submit">Apply</button>
    </form>
        
        

      </Modal></div>
      <Modal open={opens} width={'90%'} footer={false} onCancel={()=>setopens(false)}>
        <div className="detials py-5 px-5"><BlockContent blocks={data} /></div>

      </Modal>
    
    </div>
  );
};

export default page;
