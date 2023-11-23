import React from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-neutral-800 p-4"
      id="contact"
    >
      <h1>CONTACT INFO</h1>
      <div className="w-full flex flex-wrap gap-8 p-10 justify-center items-center">
        <div className="flex justify-center items-center gap-2 hover:bg-neutral-600 w-[250px] h-[40px] transition ">
          <CiMail className=" scale-125" />
          <p>bt19cse013@nituk.ac.in</p>
        </div>
        <div className="flex justify-center h-[40px] items-center gap-2 hover:bg-neutral-600 w-[250px] transition">
          <CiPhone className="scale-125" />
          <p>+91 6304888569</p>
        </div>
        <div className="flex justify-center items-center gap-2 hover:bg-neutral-600 w-[250px] transition h-[40px]">
          <a
            href="https://github.com/Govagit007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 hover:bg-neutral-600 w-[250px] transition h-[40px]"
          >
            {" "}
            <FaGithub className="scale-125" />
            <p>Venu</p>
          </a>
        </div>
        <div className="flex justify-center items-center gap-2 h-[40px] hover:bg-neutral-600 w-[250px] transition">
          <FaAddressCard className="scale-125" />
          <p>Ongole,Andhra</p>
        </div>
      </div>
      <h1>©VENU</h1>
    </div>
  );
};

export default Footer;
