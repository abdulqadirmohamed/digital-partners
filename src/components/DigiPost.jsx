import Image from "next/image";
import img from "../img/whatwedo/digipost_left.png";

const DigiPost = () => {
  
  return (
    <div
      className=" bg-gradient-to-r from-[#232A44] to-[#1A2037]  md:h-[450px] h-screen py-10"
      id="about"
    >
      <div
        className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 justify-center items-center md:h-full"
      >
        {/* Image */}
        <div>
          <Image src={img} alt="about-section-img1" />
        </div>
        {/* Text */}
        <div
          className="flex flex-col gap-10 md:text-left text-center md:py-10"
        >
          <h2 className="text-secondary md:text-[20px]">DIGIPOST</h2>
          <p className="text-darkWhite text-[20px] md:text-[20px] font-light leading-[30px]">
            With a digital mailbox, you receive mail digitally. Instead of
            letting a postman deliver your paper made letters to your home
            address, the same information is instead sent to your digital inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigiPost;
