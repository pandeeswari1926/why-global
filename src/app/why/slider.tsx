'use client'
import React from 'react'
import Image from 'next/image'
import lifewhy1big from '../../../public/lifewhy1big.png';
import lifewhy2big from '../../../public/lifewhy2big.png';
import lifewhy3big from '../../../public/lifewhy3big.png';
import lifewhy1small from '../../../public/lifewhy1small.png';
import lifewhy2small from '../../../public/lifewhy2small.png';
import lifewhy3small from '../../../public/lifewhy3small.png';

const SliderImage = () => {

    const [currentArticle, setCurrentArticle] = React.useState<number>(1);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentArticle((prevArticle) => (prevArticle % 3) + 1);
        }, 2000);

        return () => clearInterval(timer);
    }, []);
    const renderContent = (currentArticle:number) => {
        switch (currentArticle) {
            case 1:
                return (
                    <article>
                        <section className=' flex sm:flex-row flex-col sm:justify-evenly  items-center '>
                            <div className='relative z-10 key1'>
                                <section className='relative  animate1 '>
                                    <Image src={lifewhy1big} alt='' className='w-[400px] h-full rounded-xl drop-shadow-xl ' />
                                    <h1 className='absolute bottom-20 left-36 text-white text-xl '>Festivels</h1>
                                </section>
                            </div>
                            <Image src={lifewhy2small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />
                            <Image src={lifewhy3small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />
                        </section>
                    </article>
                )

            case 2:
                return (
                    <article
                        className='relative sm:pt-20 '>
                        <div className='absolute -translate-x-1/2 left-[50%] key2 z-10 '>
                            <Image src={lifewhy2big} alt='' className='w-[400px] h-full rounded-xl drop-shadow-xl' />
                            <h1 className='absolute bottom-20 left-44 text-white text-xl '>Trips</h1>
                        </div>
                        <section className='flex sm:flex-row flex-col sm:justify-evenly sm:gap-0 items-center'>
                            <Image src={lifewhy1small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />
                            <Image src={lifewhy3small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />
                        </section>
                    </article>
                )
            case 3:

                return (
                    <article
                        className='relative sm:pt-20 '>
                        <div className=''>
                            <div className='absolute -translate-x-1/2 -right-20 animate3 z-10 key3'>
                                <Image src={lifewhy3big} alt='' className='w-[400px] h-fullrounded-xl drop-shadow-xl' />
                                <h1 className='absolute bottom-20 left-36 text-white text-xl '>Celebrations</h1>
                            </div>
                            <section className='flex sm:flex-row flex-col sm:justify-start sm:gap-0 ml-20 items-center'>
                                <Image src={lifewhy1small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />
                                <Image src={lifewhy2small} alt='' className='w-[30%] rounded-xl drop-shadow-xl sm:mt-16' />

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
            <h1 className='text-5xl text-center bg-gradient-to-b from-[#4d4d4d] bg-clip-text text-transparent to-gray-300 font-semibold py-5'></h1>
            {renderContent(currentArticle)}
        </article>

    )
}

export default SliderImage