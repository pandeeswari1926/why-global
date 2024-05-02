import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";

interface WebDesignItem {
  heading: string;
  subHeading: string;
  content: {
    Content: string;
  }[];
  image: {
    asset: {
      url: string;
    };
  };
}

const WebDesign: React.FC = () => {
  const [webDesign, setWebDesign] = useState<WebDesignItem[]>([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='portfolio']{
            webDesign[]{
                heading,
                subHeading,
                content[]{
                    Content,
                },
                image{
                    asset->{
                        url
                    }
                },
            }
        }`
    ).then((res: { webDesign: WebDesignItem[] }[]) => {
      console.log(res[0].webDesign, "webdesign");
      setWebDesign(res[0].webDesign);
    });
  }, []);

  return (
    <>
      {webDesign.map((item, index) => (
        <div
          className="m-5 sm:m-10 justify-items-center grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10"
          key={index}
        >
          <div className="space-y-5 font-sans xl:w-[87%]">
            <h1 className="text-[#FF9315] sm:text-xl font-semibold">
              {item.heading}
            </h1>
            <h1 className="sm:text-3xl text-lg text-gray-500 font-bold">
              {item.subHeading}
            </h1>
            {item.content.map((para, ind) => (
              <p className="text-sm text-justify text-gray-500" key={ind}>
                {para.Content}
              </p>
            ))}
          </div>
          <div className="w-full h-full">
            <img src={item?.image?.asset?.url} alt="" className="w-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default WebDesign;
