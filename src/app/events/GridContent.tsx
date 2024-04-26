import React from "react";
import eventpic from "../asset/eventpic1.png";
import eventabsolutepic from "../asset/eventabsolutepic.png";
import eventsidebg from "../asset/Eventsidebg.png";
import Image from "next/image";

const GridContent = () => {
  return (
    <article className="lg:flex">
      <section className="grid md:grid-cols-2 lg:w-[90%] w-full place-items-center gap-x-5 gap-y-10 xl:px-10 py-5">
        <div className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative">
          <Image
            src={eventpic}
            className="w-full h-full rounded-xl"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          <div className="w-[80%] absolute bottom-8 left-0">
            <div className="relative w-full h-full">
              <Image src={eventabsolutepic} className="w-full h-full" alt="image"/>
              <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 xl:left-[25%]  md:left-[30%] xs2:left-[25%] left-[35%]">
                VR WORKSHOP
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative">
          <Image
            src={eventpic}
            className="w-full h-full rounded-xl"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          <div className="w-[80%] absolute bottom-8 left-0">
            <div className="relative w-full h-full">
              <Image src={eventabsolutepic} className="w-full h-full" alt="image"/>
              <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 xl:left-[25%]  md:left-[30%] xs2:left-[25%] left-[35%]">
                VR WORKSHOP
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative">
          <Image
            src={eventpic}
            className="w-full h-full rounded-xl"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          <div className="w-[80%] absolute bottom-8 left-0">
            <div className="relative w-full h-full">
              <Image src={eventabsolutepic} className="w-full h-full" alt="image"/>
              <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 xl:left-[25%]  md:left-[30%] xs2:left-[25%] left-[35%]">
                VR WORKSHOP
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative">
          <Image
            src={eventpic}
            className="w-full h-full rounded-xl"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          <div className="w-[80%] absolute bottom-8 left-0">
            <div className="relative w-full h-full">
              <Image src={eventabsolutepic} className="w-full h-full" alt="image"/>
              <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 xl:left-[25%]  md:left-[30%] xs2:left-[25%] left-[35%]">
                VR WORKSHOP
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="w-10% lg:block hidden">
        <Image src={eventsidebg} className="w-full" alt="image"/>
      </section>
    </article>
  );
};

export default GridContent;
