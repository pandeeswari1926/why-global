import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";

// Define interfaces
interface ContentItem {
  heading: string;
  content: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface WebDevelopmentItem {
  title: string;
  content: ContentItem[];
}

interface PortfolioData {
  webDevelopment: WebDevelopmentItem[];
}

const Web = () => {
  const [webdata, setWebdata] = useState<WebDevelopmentItem[]>([]);
  const [showActiveContent, setShowActiveContent] = useState<string | null>(null);

  useEffect(() => {
    SanityClient.fetch<PortfolioData>(
      `*[_type=='portfolio']{
        webDevelopment[]{
          title,
          content[]{
            heading,
            content,
            image{
              asset->{
                url
              }
            }
          }
        }
      }`
    ).then((res: any) => {
      setWebdata(res[0].webDevelopment);
      setShowActiveContent(res[0].webDevelopment[0].title);
    });
  }, []);

  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-10">
        <h1 className="text-[#FF9315] text-xl  font-bold sm:hidden pt-5">WEB DEVELOPMENT</h1>
        <div className="lg:w-[40%] lg:h-[85vh] w-full mx-auto flex justify-center">
          <div className="flex flex-row justify-center items-center relative  w-fit">
            <div className="p-5 shadow-lg shadow-gray-300 rounded-full">
              <div className="border-2 sm:border-[#FF9315] w-48 h-48 xl:w-48 xl:h-48 lg:w-44 lg:h-44 drop-shadow-xl rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-[#FF9315]  font-semibold sm:block hidden">
                    WEB DEVELOPMENT
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute -translate-x-1/2 -translate-y-1/2 sm:right-0 left-1/2 sm:left-auto top-1/2 sm:-mr-56 gap-5">
              {webdata.map((item, ind) => (
                <button
                  key={ind}
                  onClick={() => toggleContent(item.title)}
                  className={`w-40 rounded-lg py-2 drop-shadow-lg ${
                    showActiveContent === item.title
                      ? "text-white bg-[#FF9315] "
                      : "bg-white  hover:text-white hover:bg-[#FF9315]"
                  }
                  ${ind === 1 ? "xl:ml-5" : ""}
                  `}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] lg:h-[85vh] w-full">
          {webdata.map((item, ind) => (
            <div
              key={ind}
              className=" flex flex-col justify-center items-center"
            >
              {showActiveContent === item.title && (
                <div className="xs:w-[80%]  w-full flex pt-6 p-3 xs:ml-0 flex-col justify-center items-center">
                  {item.content.map((contents, index) => (
                    <div className="flex flex-col w-full mx-auto" key={index}>
                      <h1 className="text-xl sm:text-5xl text-gray-500 font-semibold">
                        {contents.heading}
                      </h1>
                      <br />
                      <hr className="h-2 bg-gradient-to-r from-[#D1A25E] ml-20 to-transparent " />
                      <br />
                      <p className="text-start text-sm text-gray-500 leading-loose">{contents.content}</p>
                      <br />
                      <div className="">
                        <button className="bg-white text-[#D1A25E] border-2 border-[#D1A25E] w-fit px-3 py-1 rounded-md hover:text-white hover:bg-[#D1A25E]">
                          Enquire Now
                        </button>
                        <div className="flex lg:justify-evenly justify-center">
                          <div className="lg:block hidden"></div>
                          <img
                            src={contents?.image?.asset?.url}
                            alt=""
                            className="w-96"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Web;
