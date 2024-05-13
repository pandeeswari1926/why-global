"use client";
import React, { useEffect, useState } from "react";
import Loader from "../home/Loader";
import Link from "next/link";
import SanityClient from "../SanityClient";
interface Alldata {
  careerPage: [
    {
      skill: string;
      description: string;
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

  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=='career']{
        careerPage[]{
            skill,
            description,
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
  return (
    <div className="mt-10">
      <div>
        <h2 className="xs2:text-5xl xs:text-4xl text-2xl bg-clip-text sha text-center">
          Career
        </h2>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center pb-5">
        {alldata &&
          alldata.map((item: any, index: any) => (
            <div
              key={index}
              className="relative mt-20 flex w-80 h-[360px]  flex-col rounded-xl bg-slate-200 mx-3 xs:mx-0 bg-clip-border text-gray-700 shadow-lg"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-400 to-primarycolor ">
                <img
                  src={item?.careerPage[0]?.Image?.asset?.url}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 h-[50%] line-clamp-5">
                <h5 className="mb-2 block  text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {item?.careerPage[0]?.role}
                </h5>
                <p className="block  text-base  font-light leading-relaxed text-inherit antialiased">
                  {item?.careerPage[0]?.skill}
                </p>
                <p className="block  text-base  font-light leading-relaxed text-inherit antialiased">
                  {item?.careerPage[0]?.experience}
                </p>
                <p className="block  text-base  font-light leading-relaxed text-inherit antialiased">
                  {item?.careerPage[0]?.description}
                </p>
              </div>
              <div className="p-6 pt-3">
                <Link
                  href={{
                    pathname: "#",
                    query: { name: item?.careerPage[0]?.title },
                  }}
                >
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-primarycolor mt-2 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-orange-200 transition-all hover:shadow-lg hover:shadow-orange-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default page;
