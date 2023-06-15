import React from 'react'
import mapWorld from "../img/map-website.png";
import Image from 'next/image';


const WorldMap = () => {
    return (
        <div className=" bg-gradient-to-r from-[#232A44] to-[#1A2037] h-[650px]" id='#partners'>
            <div className="w-[70%] mx-auto flex justify-center items-center h-full">
                <Image width={1000} src={mapWorld} alt="map-website" />
            </div>
        </div>
    )
}

export default WorldMap