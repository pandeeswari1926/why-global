import React from "react";
import Headingsection from "./Heading";

const page = () => {
  return (
    <div>
      <Headingsection />
      <div className="w-full flex flex-wrap justify-center mt-5 cursor-pointer">
        <div className="lg:w-96 w-full group relative transition-all duration-200 overflow-hidden h-full">
          <img
            src="./vrclass.png"
            style={{
              transition: "ease-in-out 0.3s",
            }}
            className="w-full hover:scale-105 hover:brightness-75  transition-all h-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default page;
