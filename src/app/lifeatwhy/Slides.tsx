"use client";
import React, { useState } from "react";
import SanityClient from "../SanityClient";

interface Slide {
  title: string;
  images: {
    image: {
      asset: {
        url: string;
      };
    };
  }[];
}

const Slides = () => {
  const [currentArticle, setCurrentArticle] = React.useState<number>(1);
  const [slider1, setSliderdata1] = useState<Slide | null>(null);
  const [slider2, setSliderdata2] = useState<Slide | null>(null);
  const [slider3, setSliderdata3] = useState<Slide | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle((prevArticle) => (prevArticle % 3) + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type=='lifeAtWhy']{
        slider[]{
          slides[]{
            title,
            images[]{
              image{
                asset->{
                  url
                },
            }
            
              
            }
            }
          },
      }`
    ).then((res) => {
      console.log(res[0]?.slider[0]?.slides[0], "LifeAtWhyData slider");
      setSliderdata1(res[0]?.slider[0]?.slides[0]);
      setSliderdata2(res[0]?.slider[0]?.slides[1]);
      setSliderdata3(res[0]?.slider[0]?.slides[2]);
    });
  }, []);

  const renderContent = (currentArticle: number) => {
    switch (currentArticle) {
      case 1:
        return (
          <article className="">
            <section className=" flex sm:flex-row flex-col sm:justify-center  items-center overflow-hidden">
              <div className="relative z-10">
                <section className="relative festival ">
                  <img
                    src={slider1?.images?.[0]?.image?.asset?.url}
                    alt=""
                    className="lg:w-96  md:w-72 w-96  h-full rounded-xl drop-shadow-xl "
                  />

                  <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                    {slider1?.title}
                  </h1>
                </section>
              </div>
              <img
                src={slider1?.images?.[1]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
              <img
                src={slider1?.images?.[2]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
            </section>
          </article>
        );

      case 2:
        return (
          <article className="">
            <section className=" flex sm:flex-row flex-col sm:justify-center  items-center overflow-hidden">
              <img
                src={slider2?.images?.[0]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
              <div className="relative z-10 trips">
                <section className="relative">
                  <img
                    src={slider2?.images?.[1]?.image?.asset?.url}
                    alt=""
                    className="lg:w-96  md:w-72 w-96  h-full rounded-xl drop-shadow-xl "
                  />

                  <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                    {slider2?.title}
                  </h1>
                </section>
              </div>
              <img
                src={slider2?.images?.[2]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
            </section>
          </article>
        );
      case 3:
        return (
          <article className="relative">
            <div className="flex justify-center items-center ">
              <img
                src={slider3?.images?.[0]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
              <img
                src={slider3?.images?.[1]?.image?.asset?.url}
                alt=""
                className="lg:w-80 w-60 rounded-xl drop-shadow-xl  md:block hidden"
              />
              <div className="relative z-10 celebrations">
                <img
                  src={slider3?.images?.[2]?.image?.asset?.url}
                  alt=""
                  className="lg:w-96  md:w-72 w-96 h-full rounded-xl drop-shadow-xl"
                />
                <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                  {slider3?.title}
                </h1>
              </div>
            </div>
          </article>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center">
      {renderContent(currentArticle)}
    </div>
   
  );
};

export default Slides;
