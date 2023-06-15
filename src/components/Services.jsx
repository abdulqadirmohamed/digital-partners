import React from "react";
import Image from "next/image";
import img1 from "../img/services-img2.png";
import img2 from "../img/services-img3.png";
import img3 from "../img/services-img4.png";
import img4 from "../img/services-img5.png";
import img5 from "../img/services-img6.png";
import img6 from "../img/services-img8.png";

const Services = () => {
  const pricePlans = [
    { id: 1, logo: img1, title: "Retail & E-commerce" },
    { id: 2, logo: img2, title: "Finance" },
    { id: 3, logo: img3, title: "E-Government" },
    { id: 4, logo: img4, title: "HR & Interim" },
    { id: 4, logo: img5, title: "Media & Entertainment" },
    { id: 4, logo: img6, title: "Mobility, Travel & Hospitality" },
  ];
  return (
    <div className="bg-primary ">
      <div className="w-[70%] mx-auto flex flex-col justify-center items-center h-full">
        <div className="text-center">
          <h2 className="text-secondary">WE FOLLOW THESE</h2>
          <h1 className="text-[60px] text-darkWhite font-bold leading-[56px]">
            Digital Identity
          </h1>
          {/* <p>
            If you use MobileID, you can feel confident with our handling of
            your identity. And companies, authorities and organisations can
            calmly develop their services knowing that they have chosen a safe
            and proactive provider for identifications and signatures.
          </p> */}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-16">
          {pricePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1D233C] hover:border-[1px] border-[1px] border-[#1D233C] hover:border-secondary rounded-md p-16 flex flex-col items-center cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Image src={plan.logo} alt="pricing plan icon" />
              <h1 className="text-[24px] text-darkWhite">{plan.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
