"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import plus from "../../../public/+.png";
import SanityClient from "../SanityClient";
import Item from "antd/es/list/Item";

const World = () => {
  interface world {
    title: string;
    growth1: [
      {
        growth: number;
        Content: string;
      }
    ];
    growth2: [
      {
        growth: number;
        Content: string;
      }
    ];
  }
  interface AllData {
    World: world[];
  }
  const [data, setData] = useState<AllData | null>(null);
  useEffect(() => {
    const getData = () => {
      SanityClient.fetch(
        `*[_type=='Home']{
                World[]{
                    title,
                    growth1[]{
                        growth,
                        Content,
                    },
                    growth2[]{
                        growth,
                        Content,
                    }
                }
            }`
      ).then((res) => {
        console.log(res);
        setData(res[0]);
      });
    };
    getData();
  }, []);
  return (
    <>
      <section className="bg-world bg-cover h-[10%] w-full p-5 md:p-20 flex flex-col text-center text-white grayscale-">
        {data &&
          data.World.map((Item, index) => (
            <div key={index}>
              <h1 className="lg:mt-3 lg:leading-[50px] text-base sm:text-xl md:text-[30px] lg:w-[80%] leading-10 mx-auto font-semibold pb-[8%]">
                {Item.title}
              </h1>
              <section className="grid grid-cols-1 lg:grid-cols-2 ">
                {Item.growth1.map((item: any, index: any) => (
                  <div key={index}>
                    <section className="flex flex-col pt-8 pb-[10%]">
                      <div className="flex text-center justify-center">
                        <h1 className="text-7xl md:text-9xl font-bold">
                          <CountUp
                            start={0}
                            end={item.growth}
                            duration={3}
                            delay={0}
                          />
                        </h1>
                        
                        <img
                          src="./percent.png"
                          alt="plus icon"
                          className="h-5 w-5"
                        />
                        <br />
                      </div>
                      <p className="">{item.Content}</p>
                    </section>
                  </div>
                ))}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {Item.growth2.map((items, indexes) => (
                    <section key={indexes} className="flex flex-col">
                      <div className="flex text-center justify-center">
                        <h1 className="text-4xl md:text-7xl">
                          <CountUp
                            start={0}
                            end={items.growth}
                            duration={3}
                            delay={0}
                          />
                        </h1>
                        {/* <img src="/+.png" alt="plus icon" className="h-5 w-5" /> */}
                        {
                          indexes == 0 ? (
                            <img
                            src="./percent.png"
                            alt="plus icon"
                            className="h-5 w-5"
                          />
                          ) : (
                            <img
                            src="/+.png"
                            alt="plus icon"
                            className="h-5 w-5"
                          />
                          )
                        }
                        <br />
                      </div>
                      <p className="">{items.Content}</p>
                    </section>
                  ))}
                </section>
              </section>
            </div>
          ))}
      </section>
    </>
  );
};

export default World;
