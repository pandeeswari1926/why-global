'use client'
import React from 'react'



const Appdevelopment = () => {
    const [currentArticle, setCurrentArticle] = React.useState<number>(1);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentArticle((prevArticle) => (prevArticle % 3) + 1);
        }, 2000);
        return () => clearInterval(timer);
    }, []);
    const renderContent = (currentArticle: number) => {
        switch (currentArticle) {
            case 1:
                return (
                    <article className='pb-1'>
                        <section className='bg-appbg1 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center summa'>
                            <div>
                                <section className='relative w-36 lg:-ml-28 key1'>
                                    <img src='./ionic.png' alt='' />
                                    <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>IONIC</p>
                                </section>
                                <img src='./appDevbig1.png' alt='' className='w-72 rounded-xl drop-shadow-xl p-5 sm:p-0' />
                            </div>
                            <img src='./appDev3.png' alt='' className='w-40 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                            <img src='./appDev2.png' alt='' className='w-40 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                        </section>
                    </article>
                )
            case 2:
                return (
                    <article
                        className='relative pt-20  summa pb-6'
                    >
                        <div className='absolute  -translate-x-1/2 -translate-y-1/2 sm:top-[11%] top-[5%] left-[67%] mt-4 key2'>
                            <section className='relative w-36'>
                                <img src='./react.png' alt='' className='w-72 rounded-xl drop-shadow-xl' />
                                <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>React</p>
                            </section>
                        </div>
                        <section className='bg-appbg2 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center'>
                            <img src='./appDev1.png' alt='' className='w-40 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                            <img src='./appDevbig2.png' alt='' className='w-72 rounded-xl drop-shadow-xl p-5 sm:p-0' />
                            <img src='./appDev3.png' alt='' className='w-40 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                        </section>
                    </article>
                )
            case 3:
                return (
                    <article
                        className='relative pt-20 '
                    >
                        <div className='summa'>
                            <div className='absolute -translate-x-1/2 -translate-y-1/2 sm:top-[11%] top-[8%] right-[2%] key3'>
                                <section className='relative w-36 lg:-ml-28'>
                                    <img src='./flutter.png' alt='' />
                                    <p className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#686868] text-lg font-semibold'>Flutter</p>
                                </section>
                            </div>
                            <section className='bg-appbg3 bg-cover flex sm:flex-row flex-col sm:justify-evenly gap-5 sm:gap-0 items-center'>
                                <img src='./appDev2.png' alt='' className='w-36 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                                <img src='./appDev1.png' alt='' className='w-40 rounded-xl drop-shadow-xl sm:mt-16 hidden sm:block' />
                                <img src='./appDevbig3.png' alt='' className='w-72 rounded-xl drop-shadow-xl p-5 sm:p-0' />
                            </section>
                        </div>
                    </article>
                )
            default:
                return null
        }
    }

    return (
        <article className='bg-gray-100'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-gradient-to-b from-[#4d4d4d] bg-clip-text text-transparent to-gray-100  pb-5 pt-10'>APP DEVELOPMENT</h1>
            {renderContent(currentArticle)}
        </article>  
    )
}

export default Appdevelopment