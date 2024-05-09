import React, { useEffect, useState } from "react";
// import theatre from '../asset/theatre.gif'
import Image from "next/image";
import yicon from "../../../public/yicon.png";
import SanityClient from "../SanityClient";
import Link from "next/link";
function Video() {
  interface Alldata {
    Banner: [
      {
        title1: string;
        title2: string;
        bannercontent: string;
        gif: [
          {
            gif: { asset: { url: string } };
            percentage: string;
            content: string;
          }
        ];
        BannerImage: { asset?: { url: string } };
      }
    ];

    SecondSection: [
      {
        content: string;
        icon: { asset: { url: string } };
        number: string;
      }
    ];
    WhyGlobl: [
      {
        title: string;
        subTitle: string;
        content: [{ content: string }];
        image: { asset: { url: string } };
      }
    ];

    WorkProcess: [
      {
        title: string;
        subTitle: string;
        card: [
          {
            gif: { asset: { url: string } };
            cardTitle: string;
            content: string;
          }
        ];
      }
    ];
    teamMember: [
      {
        title: string;
        subTitle: string;
        card: [
          {
            image: { asset: { url: string } };
            content: string;
            name: string;
            role: string;
          }
        ];
      }
    ];
    ourCulture: [
      {
        title: string;
        Fourimage: [{ image: { asset: { url: string } } }];
        sideimage: string;
      }
    ];
    infrastructure: [
      {
        title: string;
        subtitle: string;
        content: string;
        link: string;
      }
    ];
  }

  const [alldata, setalldata] = useState<Alldata | null>(null);
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="About"]{ 
              infrastructure[]{
                title,
                subtitle,
                content,
                link
              }
      
            }`
      ).then((res: any) => {
        console.log(res[0], "video");
        setalldata(res[0]);
      });
    };
    getdata();
  }, []);
  return (
    <div className="py-10">
      {alldata &&
        alldata.infrastructure &&
        alldata.infrastructure.map((item: any, index: any) => (
          <div key={index} className="w-full relative h-screen">
            <div className=" w-fit flex flex-col h-full justify-around px-5 items-center text-white">
              <div className="flex flex-col justify-center items-center gap-3 ">
                <p className="md:text-3xl text-xl text-center font-semibold">
                  {item?.title}
                </p>
                <p className="text-sm text-center text-md">{item?.subtitle}</p>
              </div>
              <Link target="_blank" href={item?.link}>
                <div className="w-20 h-20">
                  <img
                    src="./yicon.png"
                    className="w-full object-cover h-full"
                    alt=""
                  />
                </div>
              </Link>

              <p className="md:w-[70%] w-full md:text-center text-md text-justify">
                {item?.content}
              </p>
            </div>
            <div className="w-full h-full -z-10  absolute top-0">
              <img alt="" src="./infrastructure.gif" className="w-full object-cover h-full" />
            </div>
            <div className="bg-black -z-10 opacity-50 absolute top-0 w-full h-full"></div>
          </div>
        ))}
    </div>
  );
}
export default Video;
