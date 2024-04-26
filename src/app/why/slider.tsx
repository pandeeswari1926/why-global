"use client";
import React from "react";
import Image from "next/image";
import lifewhy1big from "../../../public/lifewhy1big.png";
import lifewhy2big from "../../../public/lifewhy2big.png";
import lifewhy3big from "../../../public/lifewhy3big.png";
import lifewhy1small from "../../../public/lifewhy1small.png";
import lifewhy2small from "../../../public/lifewhy2small.png";
import lifewhy3small from "../../../public/lifewhy3small.png";

const SliderImage = () => {

    const [currentArticle, setCurrentArticle] = React.useState<number>(1);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentArticle((prevArticle) => (prevArticle % 3) + 1);
        }, 2000);

    return () => clearInterval(timer);
  }, []);
  const renderContent = (currentArticle: number) => {
    switch (currentArticle) {
      case 1:
        return (
          <article>
            <section className=" flex sm:flex-row flex-col sm:justify-center  items-center overflow-hidden">
              <div className="relative z-10">
                <section className="relative festival ">
                  <Image
                    src={lifewhy1big}
                    alt=""
                    className="w-[400px] h-full rounded-xl drop-shadow-xl "
                  />
                  <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                    Festivels
                  </h1>
                </section>
              </div>
              <Image
                src={lifewhy2small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16 sm:block hidden"
              />
              <Image
                src={lifewhy3small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16 sm:block hidden"
              />
            </section>
          </article>
        );

      case 2:
        return (
          <article className="relative">
            <div className="z-10 trips sm:hidden  flex justify-center">
              <Image
                src={lifewhy2big}
                alt=""
                className="w-[400px] h-full rounded-xl drop-shadow-xl"
              />
              <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                Trips
              </h1>
            </div>
            <div className="absolute -translate-x-1/2 left-[50%]  z-10 trips sm:block hidden">
              <Image
                src={lifewhy2big}
                alt=""
                className="w-[400px] h-full rounded-xl drop-shadow-xl"
              />
              <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                Trips
              </h1>
            </div>
            <section className=" sm:flex-row flex-col sm:justify-evenly sm:gap-0 items-center sm:flex hidden">
              <Image
                src={lifewhy1small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16"
              />
              <Image
                src={lifewhy3small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16"
              />
            </section>
          </article>
        );
      case 3:
        return (
          <article className="relative">
            <div className="flex justify-center">
              <Image
                src={lifewhy1small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16 sm:block hidden"
              />
              <Image
                src={lifewhy2small}
                alt=""
                className="w-[30%] rounded-xl drop-shadow-xl sm:mt-16 sm:block hidden"
              />
              <div className="relative z-10 celebrations">
                <Image
                  src={lifewhy3big}
                  alt=""
                  className="w-[400px] h-fullrounded-xl drop-shadow-xl"
                />
                <h1 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-[20%] text-white text-4xl font-bold">
                  Celebrations
                </h1>
              </div>
            </div>
          </article>
        );
      default:
        return null;
    }

  return (
    <article className="">
      <h1 className="text-5xl text-center bg-gradient-to-b from-[#4d4d4d] bg-clip-text text-transparent to-gray-300 font-semibold py-5"></h1>
      
      <div className="">
      {renderContent(currentArticle)}
      </div>
    </article>
  );
};

}
export default SliderImage;
