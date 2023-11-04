import React from "react";
import signatures from "../img/nexi-icon-identification.svg";
import authentication from "../img/nexi-icon-signing.svg";
import Image from "next/image";


const Products = () => {
  const datas = [
    {
      id: 1,
      subTitle: "Products",
      title: "Authentication",
      desc: "Sign in to your site or app with electronic identities (MobileID)",
      icon: authentication,
    },
    {
      id: 2,
      subTitle: "Products",
      title: "Digital Signatures",
      desc: "Sign documents with legally binding electronic signatures",
      icon: signatures,
    },
  ];
  return (
    <div className="my-3">
      <div className="lg:w-[70%]  w-[90%] mx-auto flex flex-col items-center" id="products">
        <h1 className="md:text-[60px] text-[26px] text-primary font-bold md:leading-[70px] leading-[32px] text-center my-3">
          Products
        </h1>
        <div className="grid lg:grid-cols-2 md-grid-cols-2 items-center gap-8 md:mt-20 mt-10">
          {datas.map((data) => (
            <div
              key={data.id}
              className="bg-gray-100 flex md:flex-col gap-4 p-6 items-center relative"
            >
              <div>
                <h5 className="uppercase font-semibold">{data.subTitle}</h5>
                <h1 className="text-3xl font-semibold mt-9 text-primary">{data.title}</h1>
                <p className="my-4">{data.desc}</p>
              </div>
               
                <div><Image height={200} src={data.icon}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
