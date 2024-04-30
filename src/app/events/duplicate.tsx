import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Pagination } from "antd";
import eventabsolutepic from "../asset/eventabsolutepic.png";
import eventsidebg from "/Eventsidebg.png";
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

interface EventContent {
  title: string;
  Image: { image: { asset: { url: string } } }[];
}

interface Event {
  content: EventContent[];
}

const GridContent1 = () => {
  const [data, setData] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [image, setImage] = useState<string[][]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    SanityClient.fetch<Event[]>(
      `*[_type == "events"]{content[]{title, Image[]{image{asset -> {url}}}}}`
    ).then((data) => {
      console.log(data[0].content, "data");
      setData(data);
      setImage(
        data[0].content.map((item: any) =>
          item.Image.map((img: any) => img.image.asset.url)
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

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = data
    .map((event) => event.content)
    .flat() // flatten the array of arrays
    .slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <article>
      <div className="lg:flex">
        <section className="grid md:grid-cols-2 lg:w-[90%] w-full place-items-center gap-x-5 gap-y-10 xl:px-10 py-5">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="xl:w-[26rem] xl:h-64 md:w-80 md:h-52 xs2:w-[26rem] xs2:h-64 w-64 h-44 relative"
            >
              <Image
                src={image[index][selectedImageIndex]}
                className="w-full h-full rounded-xl"
                alt="image"
                width={100}
                height={100}
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

export default GridContent1;
