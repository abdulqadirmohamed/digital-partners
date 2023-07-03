import React from 'react'
import mapWorld from "../img/map-website.png";
import Image from 'next/image';


const WorldMap = () => {
    return (
        <div className="lg:h-[600px] h-[400px]">
            <div className="xl:w-[70%] md:w-[90%] w-[90%] mx-auto flex justify-center items-center h-full">
                <Image  src={mapWorld} alt="map-website" className='w-full' />
            </div>
        </div>
    )
}

export default WorldMap