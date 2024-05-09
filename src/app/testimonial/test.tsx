import React, { useState } from "react";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import wgs from "../../../public/WGS LIVE PICS (8) 1.png";
import SanityClient from "../SanityClient";


interface EmployeeReview {
  image?: {
    asset: {
      url: string;
    };
  };
  name: string;
  role: string;
  content: string;
}

const Test = () => {
  const [employee, setEmployee] = useState([]);

  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type=='testimonial']{
        content[]{
                image{
                    asset->{
                        url
                    }
                },
                name,
                role,
                content
                }
            }`
    ).then((res) => {
      console.log(res[0]?.content, "Our Employee");
      setEmployee(res[0]?.content);
    });
  }, []);
  return (
    <>
      {employee.map((item: EmployeeReview, ind: number) => (
        <div key={ind} className="pt-10 md:pl-20 pl-5">
          <div className="bg-test text-center bg-cover w-full h-full  lg:mt-14  mt-28">
            <div className="w-full h-full flex md:flex-row flex-col md:p-0 p-10 justify-between">
              <div className="md:w-[55%] w-full space-y-10 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-end md:w-[45%] w-full items-end ">
                  <BiSolidQuoteAltLeft className="text-primarycolor size-10 " />
                </div>
                <p className="md:w-[45%] w-full text-start">
                  {item?.content}
                </p>
                <div className="flex flex-col justify-items-start md:w-[50%] w-full">
                  <BiSolidQuoteAltLeft className="text-primarycolor size-10" />
                </div>
              </div>
              <div className="md:w-[45%] w-full flex md:flex-col flex-col-reverse justify-between md:items-start items-center ">
                <div className="flex flex-col justify-end  w-full">
                  <h1 className="font-semiboldt ext-xl md:mt-0 ml-16 mt-5 text-gray-600">
                    {item?.name}
                  </h1>
                  <p className="text-gray-500 text-sm ">{item?.role}</p>
                </div>
                <div className="w-[70%]">
                  <img src={item?.image?.asset?.url} alt="Our Employee" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Test;
