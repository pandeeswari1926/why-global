import React from "react";
import Map from "../contactus/Map";
import Contactform from "./Contactform";

const page = () => {
  return (
    <div>
      <div className="">
        <Contactform />
        <div className="mt-96 md:mt-36">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default page;
