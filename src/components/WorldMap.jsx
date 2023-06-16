import React from 'react'
import mapWorld from "../img/map-website.png";
import Image from 'next/image';


const WorldMap = () => {
    return (
        <div className=" bg-gradient-to-r from-[#232A44] to-[#1A2037] h-[650px]" id='#partners'>
            <div className="md:w-[70%] w-[90%] mx-auto mx-auto flex justify-center items-center h-full">
                <Image  src={mapWorld} alt="map-website" />
            </div>
        </div>
    )
}

export default WorldMap