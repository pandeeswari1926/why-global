"use client";
import React, { useState } from "react";
import bgs from "../asset/bgs.png";
import Image from "next/image";
import vrclass from "../asset/vrclass.png";
import SanityClient from "../SanityClient";

const Heading = () => {
  const [data, setdata] = useState("");
  
  React.useEffect(() => {
    SanityClient.fetch(`*[_type == "events"]{title, subtitle}`).then((data)=>{
      console.log(data ,"data")
      setdata(data[0])
    })
  }, []);
  return (
    <div className="w-full md:h-60 h-32 relative">
      <div className="w-full h-full absolute top-0 left-0">
        <Image src={bgs} alt="" className="w-full h-full" />
      </div>
      <div className="absolute w-full flex flex-col items-center justify-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="xl:text-8xl md:text-6xl xs:text-3xl text-xl  bg-gradient-to-b from-white to-transparent text-transparent font-bold bg-clip-text">
          {data && data.title}
        </p>
        <p className="text-white xl:text-4xl md:text-2xl xs:text-lg text-sm font-medium">
          Exceptional Events, Every Time
        </p>
      </div>
    </div>
  );
};

export default Heading;
