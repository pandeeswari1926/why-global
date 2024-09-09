import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface PortfolioItem {
  images: string;
  title: string;
}

const OurPortfolio: React.FC = () => {
  const ourPortfolio: PortfolioItem[] = [
    { images: "OurPortfolioimg1.png", title: "Project One" },
    { images: "OurPortfolioimg2.png", title: "Project two" },
    { images: "OurPortfolioimg3.png", title: "Project Three" },
    { images: "OurPortfolioimg4.png", title: "Project Four" },
    { images: "OurPortfolioimg5.png", title: "Project Five" },
  ];

  const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  const [enlarged, setEnlarged] = useState<number | null>(null);

  const bringToFront = (index: number) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      newOrder.splice(newOrder.indexOf(index), 1);
      newOrder.push(index);
      return newOrder;
    });
    setEnlarged(index);
  };

  return (
    <div className="md:mt-10">
      <article
        className="relative overflow-hidden bg-cover bg-no-repeat w-full py-5"
        style={{ backgroundImage: "url('/bg_profilo.png')" }}
      >
        <div className="md:py-8 md:pl-10 p-5">
          <p className="sixHundred:text-5xl xs:text-4xl text-2xl lg:justify-start justify-center flex items-center font-bold">
            Our Portfolio
          </p>
        </div>
        <img
          src="/width_200.png"
          alt=""
          className="w-44 absolute right-0 top-0 -mt-16 -mr-20 sm:block hidden"
        />
        <section className="pb-5 md:pb-1 relative top-[-1rem] min-h-[60vh] sixHundred:min-h-[60vh] flex items-center justify-center">
          <div className="w-[90%] mx-auto flex items-center justify-center h-[70vh] relative">
            <div className="relative w-full flex items-center justify-center h-full">
              {ourPortfolio.map((item, index) => (
                <div
                  key={index}
                  className="absolute rounded-lg bg-gray-200 cursor-pointer"
                  onClick={() => bringToFront(index)}
                  style={{
                    zIndex: order.indexOf(index),
                    left: enlarged === index ? "50px" : `${index * 50}px`,
                    top: enlarged === index ? "20px" : "40px",
                    width: enlarged === index ? "300px" : "200px",
                    height: enlarged === index ? "300px" : "200px",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <img
                    className="rounded-lg w-full h-full object-cover"
                    src={item.images}
                    alt={`Portfolio ${index + 1}`}
                  />
                  <div className="p-2 text-center rounded-b-lg bg-primarycolor text-white">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default OurPortfolio;
