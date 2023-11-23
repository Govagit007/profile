import React from "react";
import logo from "../images/p-1.png";

const Main = () => {
  return (
    <div className="w-full bg-neutral-700 mt-4" id="main">
      <div className=" w-full flex  flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
        <img
          src={logo}
          alt="p-pick"
          className="hover:scale-105 transtion duration-200 w-[200px] h-[200px] brightness-90 rounded-full"
        />
        <div className="cursor-pointer  flex flex-col justify-center items-center gap-2">
          <p className="hover:text-neutral-200 hover:scale-110 transition duration-200 font-semibold text-2xl">
            <span className="text-5xl">V</span>ENU{" "}
            <span className="text-6xl">AK</span>KAMGARI
          </p>
          <p className="hover:text-neutral-200 hover:scale-110 transition duration-200">
            <span className="text-5xl"> M</span>ERN | FULL STACK DEVELOPER
          </p>
          <p>
            Resume/CV{" "}
            <a
              href="https://drive.google.com/file/d/18iisbUm_SyM3g_OlomvleMqHkGytNrRk/view?usp=sharing "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:bg-neutral-300 p-1 rounded-md">🔗</span>
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
