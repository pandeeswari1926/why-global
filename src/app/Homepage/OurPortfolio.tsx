import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';

const OurPortfolio = () => {
  const ourPortfolio = [
    { images: 'OurPortfolioimg1.png' },
    { images: 'OurPortfolioimg2.png' },
    { images: 'OurPortfolioimg3.png' },
    { images: 'OurPortfolioimg4.png' },
    { images: 'OurPortfolioimg5.png' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start with the third image as the center focus

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % ourPortfolio.length);
  };
  const[hover,sethover]=useState(true)
useEffect(()=>{

  if(hover){
    let interval=setInterval(()=>{
      setActiveIndex((prevIndex) => (prevIndex + 1) % ourPortfolio.length);
    },3000)
    
    return()=>clearInterval(interval)
  }

  
},[hover])
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + ourPortfolio.length) % ourPortfolio.length
    );
  };

  return (
    <article className='relative overflow-hidden w-full h-full py-5'>
      <div className='md:py-8 md:pl-10 p-5 bg-gray-100'>
            <p className=' sixHundred:text-5xl xs:text-4xl text-2xl lg:justify-start justify-center flex items-center font-bold'>Our Portfolio</p>
        </div>
        <img src="/width_200.png" alt="" className="w-44 absolute right-0 top-0 -mt-16 -mr-20 sm:block hidden"/>
    <section className="pb-5 md:pb-10 bg-gray-100 relative   min-h-[90vh] sixHundred:min-h-[100vh] flex items-center justify-center">
       
      <div className="w-[90%] mx-auto flex items-center  justify-center h-full relative">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-800 text-white border-2 hover:border-primarycolor duration-200 transition-all border-transparent p-5 hover:bg-transparent hover:text-primarycolor rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        <div className="relative w-full flex items-center  justify-center h-full">
          {ourPortfolio.map((item, index) => {

            let position = index - activeIndex;

            if (position < -2) {
              position += ourPortfolio.length;
            } else if (position > 2) {
              position -= ourPortfolio.length;
            }

            let scale = 1 - Math.abs(position) * 0.2;
            let zIndex = 5 - Math.abs(position); 

            return (
              <div
                key={index}
                onMouseEnter={()=>sethover(false)}
                onMouseLeave={()=>sethover(true)}
                className={`absolute transition-all    sm:min-h-[100vh] h-[85vh] duration-500`}
                style={{
                  transform: `translateX(${position * 150}px) scale(${scale})`,
                  zIndex,
                  opacity: position === -3 || position === 3 ? 0 : 1,
                }}
              >
                <img
                  className={`rounded-lg overflow-hidden relative ${index==activeIndex?'bg-red-500':''}  shadow-2xl w-full h-full`} // Adjust height for images
                  src={item.images}
                  alt={`Portfolio ${index + 1}`}
                  style={{ width: '320px' }} // Adjust width as needed
                />
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-800 text-white border-2 hover:border-primarycolor duration-200 transition-all border-transparent p-5 hover:bg-transparent hover:text-primarycolor rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
    </article>
  );
};

export default OurPortfolio;
