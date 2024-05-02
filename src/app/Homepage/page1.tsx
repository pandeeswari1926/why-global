"use client";
import Image from "next/image";
import project from "../../../public/icon.png";
import project2 from "../../../public/icon2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";
import { useEffect, useState } from "react";
import SanityClient from "../SanityClient";

export default function Home() {
  interface workProcess {
    title: string;
    subTitle: string;
    card: [
      {
        icon: { asset: { url: string } };
        cardTitle: string;
        cardContent: string;
      }
    ];
  }
  interface AllData {
    OurWorkProcess: workProcess[];
  }

  const [data, setData] = useState<AllData | null>(null);
  useEffect(() => {
    const getData = async () => {
      await SanityClient.fetch(
        `*[_type=='Home']{
        OurWorkProcess[]{
          title,
          subTitle,
          card[]{
            icon{
              asset->{
                url,
              }
            },
            cardTitle,
            cardContent,
          }
        }
      }`
      )
        .then((res) => {
          console.log(res);
          setData(res[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div className="p-5">
      <main className="md:bg-summa md:min-h-96 md:object-cover md:bg-cover md:flex md:flex-col">
        {data &&
          data.OurWorkProcess.map((item, index) => (
            <div>
              <h3 className="text-[#FF8900] lg:pt-10 pt-5 lg:pl-10 text-center font-bold">
                {item.title}
              </h3>
              <h2 className="lg:pl-10 text-center font-medium pt-3 text-lg lg:text-2xl">
                {item.subTitle}
              </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 lg:pl-44 sm:px-10 md:pt-24">
                {item.card.map((items, indexs) => (
                  <div className="lg:w-[80%] w-full h-full relative drop-shadow-2xl" key={indexs}>
                    <div className={`border-2  bg-white rounded-ss-3xl ${indexs%2!=0 ? "" : "mt-10"}`}>
                      <img src={items?.icon?.asset?.url} alt="project" />
                      <h1 className="xl:font-semibold font-medium xl:p-3 lg:p-1 p-3 ">
                        {items.cardTitle}
                      </h1>
                      <p className="p-3 text-xs">{items.cardContent}</p>
                    </div>
                    <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full absolute -right-4 lg:bottom-48 md:bottom-40 bottom-36">
                      {indexs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </main>
      <div></div>
    </div>
  );
}
