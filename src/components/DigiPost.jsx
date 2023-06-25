import Image from "next/image";
import img from "../img/whatwedo/digipost_left.png";

const DigiPost = () => {
  return (
    <div className="md:h-[450px] h-[600px] py-10 p-4 bg-red-200" id="about">
      <div className="md:w-[70%] w-[90%] mx-auto grid md:grid-cols-2 items-center md:h-full">
        {/* Image */}
        <div>
          <Image src={img} alt="about-section-img1" className="w-[250px] mx-auto" />
        </div>
        {/* Text */}
        <div className="">
          <div className="flex flex-col gap-10 md:text-left text-center flex-wrap md:py-10">
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
        
      </div>
    </div>
  );
};

export default DigiPost;
