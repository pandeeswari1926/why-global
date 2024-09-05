"use client";
import React from "react";
import Image from "next/image";
import html from "../../../public/html_logo.png";

function Technologies() {
  let tech = [
    { title: "Frontend", img: html },
    { title: "Backend", img: html },
    { title: "Database", img: html },
    { title: "Mobile", img: html },
    { title: "CMS", img: html },
  ];

  return (
    <div
      className="bg-gray-300 lg:px-16 md:px-10 sm:px-6 px-5 overflow-hidden h-screen bg-cover bg-no-repeat w-full py-5"
      style={{ backgroundImage: "url('/bg_profilo.png')" }}
    >
      <div className="py-2 ">
        <p className="text-left sixHundred:text-5xl xs:text-4xl text-3xl items-center font-bold">
          Technologies We Work
        </p>
      </div>

      <div className="">
        {tech.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm py-10 w-full mt-6 relative shadow-xl lg:w-[80%] mx-auto"
          >
            {/* Cut Edge Title */}
            <div className="bg-primarycolor font-semibold text-lg md:text-xl rounded-r-2xl shadow-xl text-white absolute -top-3 -left-3 p-4 w-[30%] md:w-[40%]">
              <p className="text-center">{item.title}</p>
            </div>

            {/* Image Section */}
            <div className="absolute lg:right-14 right-3 lg:top-1.5 top-4 flex flex-wrap gap-4 justify-center pr-4">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-[10vh] md:w-[5.5vw]"
                  src={item.img}
                  alt={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
