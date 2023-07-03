import Image from "next/image";
import img1 from "../img/whatwedo/mobile_id_left.png";
import img2 from "../img/whatwedo/digipost_left.png";
import img3 from "../img/whatwedo/money_me_left.png";



const WhatWeDoList = () => {
  const datas = [
    {
      id: 1,
      title: "MobileID",
      desc: "MobileID is the physical ID card in a digital format - The digital identity for a digital world Once Identity is covered, we have created value addition with our products that are in the pipeline:.",
      img: img1,
    },
    {
      id: 2,
      title: "DIGIPOST",
      desc: " With a digital mailbox, you receive mail digitally. Instead of letting a postman deliver your paper made letters to your home address, the same information is instead sent to your digital inbox.",
      img: img2,
    },
    {
      id: 3,
      title: "MONEY ME",
      desc: ` Our dream is for people to live and work anywhere seamlessly. That
      means moving money without obstacles: moving it instantly,
      transparently, and conveniently`,
      img: img3,
    },
  ];

  return (
    <div className=" py-10 sm:p-4" id="about">
      {datas.map((data)=>(
      <div key={data.id} className="xl:w-[70%] md:w-[90%] w-[90%] mx-auto grid sm:grid-cols-2 items-center">
        {/* Image */}
        <div className="">
          <Image
            src={data.img}
            alt="about-section-img1"
            className="w-[250px] mx-auto"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-3 sm:text-left text-center sm:py-10">
          <h2 className="text-secondary font-bold text-[20px]">{data.title}</h2>
          <p className="text-black text-[22px] md:text-[20px] font-medium leading-[30px]">
            {data.desc}
          </p>
        </div>
      </div>

      ))}
    </div>
  );
};

// xl:bg-purple-400 lg:bg-blue-300 md:bg-amber-300 sm:bg-green-200 bg-red-300
export default WhatWeDoList;
