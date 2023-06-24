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
      <div className="md:w-[60%] w-[90%] mx-auto flex flex-col items-center">
        <h1 className="text-[50px] text-primary font-bold leading-[56px] md:w-[600px] w-full text-center my-5">Optimise your customer journey</h1>
        <div className="flex gap-4 flex-wrap mt-4">
          {datas.map((data) => (
            <div key={data.id} className="flex flex-col justify-center items-center px-2 py-3 bg-blue-50 md:w-[500px] ">
              <div className="bg-gradient-to-r to-primary from-secondary text-white p-4 w-[80px] h-[80px] rounded-full flex justify-center items-center">
                {data.icon}
              </div>
              <div className="text-center mt-3 text-[22px] ">
                <h1 className="font-bold my-2">{data.title}</h1>
                <p className="w-[50%] mx-auto leading-[29px]">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Optimise;
