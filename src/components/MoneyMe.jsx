import Image from "next/image";
import img from "../img/whatwedo/money_me_left.png";

const MoneyMe = () => {
  return (
    <div
      className=" bg-gradient-to-r to-[#232A44] from-[#1A2037]  md:h-[450px] h-screen py-10"
      id="about"
    >
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center md:h-full">
        {/* Image */}
        <div className="grid items-center ">
          <Image src={img} alt="about-section-img1" />
        </div>
        {/* Text */}
        <div
          className="flex flex-col gap-10 md:text-left text-center py-10"
        >
          <h2 className="text-secondary md:text-[20px]">MONEY ME</h2>
          <p className="text-darkWhite text-[20px] md:text-[20px] font-light leading-[30px]">
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
