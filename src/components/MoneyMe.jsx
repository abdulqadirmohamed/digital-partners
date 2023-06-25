import Image from "next/image";
import img from "../img/whatwedo/money_me_left.png";

const MoneyMe = () => {
  return (
    <div className="md:h-[450px] h-[600px] p-4 py-10 bg-slate-200" id="about">
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 md:items-center md:h-full">
        {/* Image */}
        <div className="grid items-center ">
          <Image src={img} alt="about-section-img1" className="w-[250px] mx-auto" />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-10 md:text-left text-center py-10">
          <h2 className="text-primary md:text-[20px] font-semibold">MONEY ME</h2>
          <p className="text-gray-800 text-[20px] md:text-[20px] font-normal leading-[30px]">
            Our dream is for people to live and work anywhere seamlessly. That
            means moving money without obstacles: moving it instantly,
            transparently, and conveniently
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneyMe;
