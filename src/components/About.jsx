import Image from "next/image";
import React from "react";
import img1 from '../img/about-section-img1.png'
import img2 from '../img/about-section-img2.png'
import img3 from '../img/about-section-img3.png'


const About = () => {
    return (
        <div className="grid grid-cols-2 items-center">
            {/* Image */}
            <div className="grid grid-cols-2 gap-3 items-end">
                <Image src={img1} alt="about-section-img1" />
                <Image src={img2} alt="Who we are" />
                <Image src={img3} alt="Who we are" />
            </div>
            {/* Text */}
            <div className="flex flex-col gap-6">
                <h2 className="text-secondary">WHO WE ARE</h2>
                <h1 className="text-[60px] text-darkWhite font-bold leading-[56px]">
                    Everything starts with identity
                </h1>
                <p className="text-darkWhite text-[20px]">
                    At New Creation we start at the grassroot to build our solutions for identity.
                </p>
            </div>

        </div>
    );
};

export default About;
