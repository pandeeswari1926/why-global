import React from "react";
import Image from "next/image";
import Whyglobalservicesworldmapimg from "../../../public/whyglobalservicesworldmapimg.png";

function Map() {
  return (
    <div className="flex flex-col gap-5 items-center py-10 ">
      <h1 className="lg:text-4xl sm:text-2xl text-xl font-semibold text-[#3E3E3E]">
        We&apos;re Global and Growing
      </h1>
      <p className="text-[#808080]  text-sm lg:px-0 xs:pb-10 xs:px-10 px-5 lg:w-[80%] mx-auto text-justify">
      Building an enterprise-level site doesn&apos;t have to be a nightmare or cost you thousands. Our purpose-built solution streamlines development and enhances scalability, ensuring your project meets the highest standards of performance and reliability. With us, you can achieve your digital goals efficiently and effectively, empowering your business for success in the online landscape.
      </p>
      <img src="./whyglobalservicesworldmapimg.png" alt="map" />
    </div>
  );
}

export default Map;
