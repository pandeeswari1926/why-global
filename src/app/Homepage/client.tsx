import React, { useState, useEffect } from "react";
import Image from "next/image";
import ehs from "../../../public/ehs.png";
import five from "../../../public/five.png";
import w8loss from "../../../public/w8loss.png";
import antimalaries from "../../../public/antimalaries.png";
import abhis from "../../../public/abhis.png";
import riofin from "../../../public/riofin.png";
import whytap from "../../../public/whytap.png";
import hrc from "../../../public/hrc.png";
import sennata from "../../../public/sennata.png";
import client_img_1 from "../../../public/client_img_1.png";
import client_img_2 from "../../../public/client_img_2.png";
import client_img_3 from "../../../public/client_img_3.png";
import client_img_4 from "../../../public/client_img_4.png";
import client_img_5 from "../../../public/client_img_5.png";
import client_img_6 from "../../../public/client_img_6.png";
import client_img_7 from "../../../public/client_img_7.png";
import client_img_8 from "../../../public/client_img_8.png";
import client_img_9 from "../../../public/client_img_9.png";
import client_img_10 from "../../../public/client_img_10.png";
import bg from "../../../public/getin.png";

function Client() {
  const logos = [
    ehs,
    five,
    w8loss,
    antimalaries,
    abhis,
    riofin,
    whytap,
    hrc,
    sennata,
    client_img_1,
    client_img_2,
    client_img_3,
    client_img_4,
    client_img_5,
    client_img_6,
    client_img_7,
    client_img_8,
    client_img_9,
    client_img_10,
  ];

  // Pattern of the number of logos per row
  const pattern = [6, 7, 6];
  const logoRows = [];
  let index = 0;

  // Split logos according to the pattern until all logos are used
  while (index < logos.length) {
    for (let count of pattern) {
      if (index >= logos.length) break;
      logoRows.push(logos.slice(index, index + count));
      index += count;
    }
  }

  // State to hold the zoomed div indices
  const [zoomedIndex, setZoomedIndex] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const totalRows = logoRows.length;
    const interval = setInterval(() => {
      const randomRow = Math.floor(Math.random() * totalRows);
      const randomCol = Math.floor(Math.random() * logoRows[randomRow].length);
      setZoomedIndex({ row: randomRow, col: randomCol });
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [logoRows]);

  return (
    <div
      className="relative flex flex-col items-center w-full h-full bg-cover  bg-no-repeat justify-center gap-2 py-2 md:py-10"
      style={{
        // backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="absolute inset-0 z-10"></div>
      <section className="relative z-20 lg:space-y-5">
        <div className="md:py-8 md:pl-10 mt-[-2rem]">
          <p className="text-2xl xs:text-4xl sixHundred:text-5xl text-font flex items-center justify-center md:justify-start font-bold text-black">
            Our Clients
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          {logoRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center items-center space-x-2 sm:space-x- md:space-x-6 lg:space-x-7"
            >
              {row.map((logo, colIndex) => (
                <div
                  key={colIndex}
                  className={`relative flex justify-center items-center bg-gray-200 overflow-hidden transition-transform duration-500 ${
                    zoomedIndex.row === rowIndex && zoomedIndex.col === colIndex
                      ? "scale-110 shadow-lg shadow-blue-500"
                      : ""
                  }`}
                  style={{
                    width: "150px", // Responsive width for smaller screens
                    height: "135px", // Responsive height for smaller screens
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Client Logo ${colIndex + 1}`}
                    width={100}
                    height={80}
                    className="object-contain p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Client;
