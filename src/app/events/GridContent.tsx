"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Pagination } from "antd";
import event from '../../../public/iv2.png'
import eventabsolutepic from "../../../public/eventabsolutepic.png";
import teck from "../../../public/teck.jpg";
import teck2 from "../../../public/figma.png";
import vr from "../../../public/vr.png";
import eventsidebg from "../../../public/Eventsidebg.png";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import SanityClient from "../SanityClient";

const itemRender = (_: any, type: any, originalElement: any) => {
  if (type === "prev") {
    return (
      <a className="flex items-center gap-1 hover:text-primarycolor">
        <MdOutlineKeyboardArrowLeft /> Prev{" "}
      </a>
    );
  }
  if (type === "next") {
    return (
      <a className="flex items-center gap-1 hover:text-primarycolor">
        Next <MdOutlineKeyboardArrowRight />
      </a>
    );
  }
  return originalElement;
};

const GridContent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [image, setImage] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type == "events"]{content[]{title, Image[]{image{asset -> {url}}}}}`
    ).then((data) => {
      console.log(data[0].content, "data");
      setData(data[0].content);
      setImage(
        data[0].content.map((item: any) =>
          item.Image.map((img: any) => img?.image?.asset?.url)
        )
      );
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex + image.length - 1) % image.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [image]);
  console.log(image.length, "jajaj");

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <article className="flex flex-col gap-5">
      <div className="lg:flex">
        <section className="grid md:grid-cols-2 lg:w-[90%] w-full place-items-center gap-x-5 gap-y-10 xl:px-10 py-5">
         
            <div
           
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={teck}
                className="w-full h-full object-cover rounded-xl"
                alt="image"
                
              />
              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <Image
                    src={eventabsolutepic}
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 left-1/3 -translate-y-1/2 top-1/2 ">
                  TECHATHLON 2K23
                  </h2>
                </div>
              </div>
            </div>
            <div
           
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={vr}
                className="w-full h-full object-cover rounded-xl"
                alt="image"
               
              />
              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <Image
                    src={eventabsolutepic}
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 left-1/3 -translate-y-1/2 top-1/2 ">VR WORKSHOP</h2>
                </div>
              </div>
            </div>
            <div
           
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={event}
                className="w-full object-cover h-full rounded-xl"
                alt="image"
                
              />
              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <Image
                    src={eventabsolutepic}
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 left-1/3 -translate-y-1/2 top-1/2 ">
                  INDUSTRIAL VISIT
                  </h2>
                </div>
              </div>
            </div>
            <div
           
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={teck2}
                className="w-full h-full object-cover rounded-xl"
                alt="image"
                
              />
              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <Image
                    src={eventabsolutepic}
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 left-1/3 -translate-y-1/2 top-1/2 ">
                  FIGMA WORKSHOP
                  </h2>
                </div>
              </div>
            </div>
        
        </section>
        <section className="w-10% lg:block hidden">
          <Image src={eventsidebg} className="w-full" alt="image" />
        </section>
      </div>
      <div className="flex justify-center pb-5">
        {currentPage && data.length>0 && data &&pageSize ? <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          itemRender={itemRender}
          showSizeChanger={false}
        />:null}
       
      </div>
    </article>
  );
};

export default GridContent;
