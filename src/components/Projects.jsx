import React, { useState } from "react";
import note from "../images/projects/note.png";
import eshop from "../images/projects/eshop.png";
import hoobank from "../images/projects/hoobank.png";
import delicious from "../images/projects/delicious.png";

const Projects = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  const handleHover1 = () => {
    setHover1(!hover1);
  };

  const handleHover2 = () => {
    setHover2(!hover2);
  };

  const handleHover3 = () => {
    setHover3(!hover3);
  };

  const handleHover4 = () => {
    setHover4(!hover4);
  };

  return (
    <div className="w-full flex flex-col gap-8 mb-10" id="projects">
      <div className="w-full flex justify-center items-center text-4xl">
        <p>PROJECTS</p>
      </div>
      <div className="w-full flex flex-col justify-around items-center md:px-36 gap-8 md:gap-0">
        <div
          className="w-[300px] md:w-3/5 flex justify-start items-center relative bg-neutral-600 rounded-xl md:hover:scale-110 transition duration-500"
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
        >
          <a
            href="https://heroic-buttercream-1a9a4f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={note}
              alt=""
              className="w-[60px] h-[40px] object-cover m-4 hover:scale-105 transition-all duration-100"
            />
          </a>

          <div>
            <p className="cursor-pointer">Note-Zipper | MERN STACK</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Govagit007/client-zipper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  {" "}
                  Client-code
                </p>
              </a>
              <a
                href="https://github.com/Govagit007/notezipper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  Server-code
                </p>
              </a>
            </div>
          </div>

          <div
            className={
              hover1
                ? "flex justify-center items-center absolute rounded-xl z-20 -top-28 md:-top-16  left-2 bg-neutral-200  "
                : "hidden"
            }
          >
            <p className="text-neutral-700 p-4">
              Technologies:-{" "}
              <span className=" font-medium ">
                {" "}
                React,Redux,Bootstrap,Express,MongoDB,Netlify,Render,Thunder-Client
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[300px] md:w-3/5 flex justify-start items-center relative bg-neutral-500 rounded-xl md:hover:scale-110 transition duration-500"
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
        >
          <a
            href="https://meek-gaufre-5e445c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={eshop}
              alt=""
              className="w-[60px] h-[40px] object-cover m-4 hover:scale-105 transition-all duration-100"
            />
          </a>

          <div>
            <p className="cursor-pointer">Eshop | MERN STACK</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Govagit007/eshop-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  {" "}
                  Client-code
                </p>
              </a>
              <a
                href="https://github.com/Govagit007/eshop-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  Server-code
                </p>
              </a>
            </div>
            <div
              className={
                hover2
                  ? "flex justify-center items-center absolute rounded-xl z-20 -top-28 md:-top-16  left-2 bg-neutral-200  "
                  : "hidden"
              }
            >
              <p className="text-neutral-700 p-4">
                Technologies:-{" "}
                <span className=" font-medium ">
                  {" "}
                  React,Redux,Tailwind,Material-ui,Expressjs,Nodejs,MongoDB,Postman
                </span>
              </p>
            </div>
          </div>

          <div className="fixed"> </div>
        </div>
        <div
          className="w-[300px] md:w-3/5 flex justify-start items-center relative bg-neutral-600 rounded-xl md:hover:scale-110 transition duration-500"
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
        >
          <a
            href="https://gentle-cascaron-1f0661.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={hoobank}
              alt=""
              className="w-[60px] h-[40px] object-cover m-4 hover:scale-105 transition-all duration-100"
            />
          </a>

          <div>
            <p className="cursor-pointer">HooBank | React-app</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Govagit007/bank_mg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  {" "}
                  Client-code
                </p>
              </a>
            </div>{" "}
            <div
              className={
                hover3
                  ? "flex justify-center items-center absolute rounded-xl z-20 -top-28 md:-top-16  left-2 bg-neutral-200 "
                  : "hidden"
              }
            >
              <p className="text-neutral-700 p-4">
                Technologies:-{" "}
                <span className=" font-medium "> React,Tailwind,Netlify</span>
              </p>
            </div>
          </div>

          <div className="fixed"> </div>
        </div>
        <div
          className="w-[300px] md:w-3/5 flex justify-start items-center relative bg-neutral-500 rounded-xl md:hover:scale-110 transition duration-500"
          onMouseEnter={handleHover4}
          onMouseLeave={handleHover4}
        >
          <a
            href="https://govagit007.github.io/deliciousss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={delicious}
              alt=""
              className="w-[60px] h-[40px] object-cover m-4 hover:scale-105 transition-all duration-100"
            />
          </a>

          <div>
            <p className="cursor-pointer">Delicious | React-app</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Govagit007/deliciousss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="hover:scale-95 transition text-sm hover:bg-neutral-400 p-1 rounded-lg text-neutral-100">
                  {" "}
                  Client-code
                </p>
              </a>
            </div>
            <div
              className={
                hover4
                  ? "flex justify-center items-center absolute rounded-xl z-20 -top-28 md:-top-16  left-2 bg-neutral-200 "
                  : "hidden"
              }
            >
              <p className="text-neutral-700 p-4">
                Technologies:- <span className=" font-medium "> React,CSS</span>
              </p>
            </div>
          </div>

          <div className="fixed"> </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
