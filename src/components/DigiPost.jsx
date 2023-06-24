import Image from "next/image";
import img from "../img/whatwedo/digipost_left.png";

const DigiPost = () => {
  return (
    <div className="md:h-[450px] h-screen py-10 border-2 border-gray-100" id="about">
      <div className="md:w-[70%] w-[90%] mx-auto grid grid-cols-3 items-center md:h-full">
        {/* Text */}
        <div className="col-span-2">
          <div className="flex flex-col gap-10 md:text-left text-center md:py-10">
            <h2 className="text-primary font-semibold md:text-[20px]">
              DIGIPOST
            </h2>
            <p className="text-gray-800 text-[20px] md:text-[20px] font-normal leading-[30px]">
              With a digital mailbox, you receive mail digitally. Instead of
              letting a postman deliver your paper made letters to your home
              address, the same information is instead sent to your digital
              inbox.
            </p>
          </div>
        </div>
        {/* Image */}
        <div>
          <Image src={img} alt="about-section-img1" />
        </div>
      </div>
    </div>
  );
};

export default DigiPost;
