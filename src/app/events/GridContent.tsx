"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Pagination } from "antd";
import eventpic from "../asset/eventpic1.png";
import eventabsolutepic from "../asset/eventabsolutepic.png";
import eventsidebg from "../asset/Eventsidebg.png";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const itemRender = (_:any,type:any, originalElement:any) => {
  if (type === "prev") {
    return <a className="flex items-center gap-1 hover:text-primarycolor"><MdOutlineKeyboardArrowLeft /> Previous </a>;
  }
  if (type === "next") {
    return <a className="flex items-center gap-1 hover:text-primarycolor">Next <MdOutlineKeyboardArrowRight /></a>;
  }
  return originalElement;
};

const GridContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const CurrentItems = [
    {
      title: "VR WORKSHOP 1",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 2",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 3",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 4",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 5",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 6",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 3",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 4",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 3",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 4",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 3",
      image: eventpic,
    },
    {
      title: "VR WORKSHOP 4",
      image: eventpic,
    },
  ];

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = CurrentItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  return (
    <article>
      <div className="lg:flex">
        <section className="grid md:grid-cols-2 lg:w-[90%] w-full place-items-center gap-x-5 gap-y-10 xl:px-10 py-5">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={item.image}
                className="w-full h-full rounded-xl"
                layout="fill"
                objectFit="cover"
                alt="image"
              />
              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <Image
                    src={eventabsolutepic}
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 xl:left-[25%]  md:left-[30%] xs2:left-[25%] left-[35%]">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="w-10% lg:block hidden">
          <Image src={eventsidebg} className="w-full" alt="image" />
        </section>
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          total={CurrentItems.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          itemRender={itemRender}
          showSizeChanger={false}
        />
      </div>
    </article>
  );
};

export default GridContent;
