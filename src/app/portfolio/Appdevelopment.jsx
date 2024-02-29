'use client'
import React from 'react'
import Image from 'next/image'
import appdev1 from '../../../public/appDev1.png'
import appdev2 from '../../../public/appDev2.png'
import appdev3 from '../../../public/appDev3.png'
import appdevbig1 from '../../../public/appDevbig1.png'
import appdevbig2 from '../../../public/appDevbig2.png'
import appdevbig3 from '../../../public/appDevbig3.png'
import ionic from '../../../public/ionic.png'
import  react from '../../../public/react.png'
import flutter from '../../../public/flutter.png'



const Appdevelopment = () => {

  const [currentArticle, setCurrentArticle] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle((prevArticle) => (prevArticle % 3) + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);


  const renderContent = () => {
    switch (currentArticle) {
        case 1:
            return (
                <article
                >
                    <section className='bg-appbg1 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center summa'>
                        <div>
                            <section className='relative w-36 lg:-ml-28 key1'>
                                <Image src={ionic}/>
                                <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>IONIC</p>
                            </section>
                            <Image src={appdevbig1} className='w-72 rounded-xl drop-shadow-xl'/>
                        </div>
                        <Image src={appdev3} className='w-40 rounded-xl drop-shadow-xl sm:mt-16' />
                        <Image src={appdev2} className='w-40 rounded-xl drop-shadow-xl sm:mt-16'/>
                    </section>
                </article>
            )

        case 2:
            return (
                <article 
                    className='relative sm:pt-20 summa'
                >
                    <div className='absolute  -translate-x-1/2 -translate-y-1/2 top-[11%] left-[67%] mt-4 key2'>
                        <section className='relative w-36'>
                            <Image src={react} className='w-72 rounded-xl drop-shadow-xl'/>
                            <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>React</p>
                        </section>
                    </div>     
                    <section className='bg-appbg2 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center'>
                            <Image src={appdev1} className='w-40 rounded-xl drop-shadow-xl sm:mt-16'/>
                            <Image src={appdevbig2} className='w-72 rounded-xl drop-shadow-xl'/>
                            <Image src={appdev3} className='w-40 rounded-xl drop-shadow-xl sm:mt-16'/>
                    </section>
                </article>
            )
        case 3:

            return (
                <article 
                    className='relative sm:pt-20 '
                >
                    <div className='summa'>
                    <div className='absolute -translate-x-1/2 -translate-y-1/2 top-[11%] right-[2%] key3'>
                        <section className='relative w-36 lg:-ml-28'>
                            <Image src={flutter}/>
                            <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>Flutter</p>
                        </section>
                    </div>

                    <section className='bg-appbg3 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center'>
                        <Image src={appdev2} className='w-40 rounded-xl drop-shadow-xl sm:mt-16'/>
                        <Image src={appdev1} className='w-40 rounded-xl drop-shadow-xl sm:mt-16'/>       
                        <Image src={appdevbig3} className='w-72 rounded-xl drop-shadow-xl'/>
                    </section>
                    </div>
                </article>

            )
        default:
            return null
    }
  }

  return ( 
    <article className=''>
        <h1 className='text-5xl text-center bg-gradient-to-b from-[#4d4d4d] bg-clip-text text-transparent to-gray-300 font-semibold py-5'>APP DEVELOPMENT</h1>
        {renderContent(currentArticle)}
    </article>
    
  )
}

export default Appdevelopment