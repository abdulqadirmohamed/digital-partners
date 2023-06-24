import React from 'react'
import mapWorld from "../img/map-website.png";
import Image from 'next/image';


const WorldMap = () => {
    return (
        <div className=" md:h-[650px] h-[450px] py-10" id='#partners'>
            <div className="md:w-[70%] w-[90%] mx-auto flex justify-center items-center h-full">
                <Image  src={mapWorld} alt="map-website" />
            </div>
        </div>
    )
}

export default WorldMap