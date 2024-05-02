"use client";
import React from "react";
import SliderPage from "./slider";
import Test from "./test";
import Banner from "./banner"

const Page = () => {
  return (
    <>
      {/* first section */}
      <div className="">
        <Banner/>
        {/* second section */}
      </div>
      <div className="">
        <SliderPage />
      </div>
      {/* third section */}
      <div>
        <Test />
      </div>
    </>
  );
};

export default Page;