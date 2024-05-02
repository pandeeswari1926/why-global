"use client";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
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
      setSelectedImageIndex(0)
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex + 3 + 1) % 3
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [image]);

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <article>
      <div className="lg:flex">
        <section className="grid md:grid-cols-2 lg:w-[80%] w-full place-items-center gap-x-5 gap-y-10 xl:px-10 py-5">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <div
                className="w-full h-full rounded-xl bg-cover"
                style={{
                  backgroundImage: `url(${image[index][selectedImageIndex]})`,
                  backgroundPosition: "center",
                  transition: "1s ease",
                }}
              />

              <div className="w-[80%] absolute bottom-8 left-0">
                <div className="relative w-full h-full">
                  <img
                    src="./eventabsolutepic.png"
                    className="w-full h-full"
                    alt="image"
                  />
                  <h2 className="text-white xs2:text-base text-xs font-bold absolute top-[23%] ml-3 ">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="w-[20%] h-full lg:block hidden ">
          <img src="./Eventsidebg.png" className="w-full h-full mt-5" alt="image" />
        </section>
      </div>
      <div className="flex justify-center pb-5">
        <Pagination
          current={currentPage}
          total={data.length}
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
