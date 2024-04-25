import React from 'react'
import Map from "../contactus/Map"
import Contactform from './Contactform'

const page = () => {
    return (
        <div>
          <div className='flex flex-col md:gap-24 gap-96'>
            <Contactform />
            <Map />
          </div>
        </div>
    )
}

export default page