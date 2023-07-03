import React from "react";
import { BiFingerprint, BiPen } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

const Optimise = () => {
  const datas = [
    {
      id: 1,
      title: "Sign up",
      desc: "Verify identities of people and organisations using trusted sources.",
      icon: <GiCheckMark size={20} />,
    },
    {
      id: 2,
      title: "Sign of fraud?",
      desc: "Automate and optimise compliant identity and risk workflows.",
      icon: <BsShieldLock size={20} />,
    },
    {
      id: 3,
      title: "Sign in",
      desc: "Log in users quickly and securely and manage access rights.",
      icon: <BiFingerprint size={20} />,
    },
    {
      id: 4,
      title: "Sign it",
      desc: "Get documents signed remotely and manage evidence.",
      icon: <BiPen size={20} />,
    },
  ];
  return (
    <div className="my-3">
      <div className="lg:w-[70%]  w-[90%] mx-auto flex flex-col items-center">
        <h1 className="md:text-[60px] text-[26px] text-primary font-bold md:leading-[70px] leading-[32px] text-center">Optimise your customer journey</h1>
        <div className="grid lg:grid-cols-2 md-grid-cols-2 gap-4 mt-4">
          {datas.map((data) => (
            <div key={data.id} className="flex md:flex-col gap-4 md:justify-center items-center px-2 py-3 bg-blue-50 rounded-md relative">
              <div className="bg-gradient-to-r to-primary from-secondary text-white p-4 md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center">
                {data.icon}
              </div>
              <div className="md:text-center md:mt-3 md:text-[22px] text-[18px] ">
                <h1 className="font-bold my-2">{data.title}</h1>
                <p className="md:w-[80%] mx-auto leading-[29px]">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Optimise;
