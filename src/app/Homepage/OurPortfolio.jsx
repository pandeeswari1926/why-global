import React, { useState } from 'react'

const OurPortfolio = () => {

    const OurPortfolio = [
        {
          images:"OurPortfolioimg1.png",
        },
        {
            images:"OurPortfolioimg2.png",
        },
        {
            images:"OurPortfolioimg3.png",
          },
          {
            images:"OurPortfolioimg4.png",
          },
          {
            images:"OurPortfolioimg5.png",
          },
    ]
   
    // const [OurPortFolioData , setOurProtFolioData]= useState(OurPortfolio)
  return (
    <>
     <section>

     <section className="py-10 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OurPortfolio.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-auto"
              src={item.images}
              alt={`Portfolio ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
     </section>
    </>
  )
}

export default OurPortfolio