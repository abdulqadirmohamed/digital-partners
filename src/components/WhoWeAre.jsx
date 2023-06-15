import Image from "next/image";
import React from "react";
import img from '../img/who-we-are-img.png'


const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      {/* Text */}
      <div>
        <h2 className="text-secondary">WHO WE ARE</h2>
        <h1 className="text-[60px] text-darkWhite font-bold leading-tight">
          New Creation is a leading provider of digital identity solutions.
        </h1>
        <p className="text-darkWhite">
          Our vision is to build technology for people to trust each other in a
          digital world. We bring trust to identity in every step of the
          customer journey from onboarding to off boarding. With us, safety and
          security always come first. We do not share any data with anyone else.
          Our top priority is to keep MobileID as safe and reliable as it has
          always been.
        </p>
      </div>
      {/* Image */}
      <div>
        <Image src={img} alt="Who we are"/>
      </div>
    </div>
  );
};

export default WhoWeAre;
