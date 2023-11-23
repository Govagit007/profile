import React from "react";
import cpp from "../images/skills/c++.png";
import JS from "../images/skills/javascript.png";
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import tail from "../images/skills/tail.png";
import reactJs from "../images/skills/react.png";
import redux from "../images/skills/redux.png";
import node from "../images/skills/node.png";
import express from "../images/skills/express.png";
import mongo from "../images/skills/mongo.png";

const Skills = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-8"
      id="skills"
    >
      <h1 className="text-3xl">SKILLS</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <h1>LANGUAGES</h1>
          <div className="flex flex-wrap gap-20 p-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={cpp}
                alt=""
                className="w-[60px] hover:scale-110 transition duration-200"
              />
              <p>c++</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={JS}
                alt=""
                className="w-[60px] hover:scale-110 transition duration-200"
              />
              <p>JavaScript</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={html}
                alt=""
                className="w-[60px] hover:scale-110 transition duration-200"
              />
              <p>HTML</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={css}
                alt=""
                className="w-[60px] hover:scale-110 transition duration-200"
              />
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div>
          <h1>TOOLS AND FRAMEWORKS</h1>
        </div>
        <div className="flex flex-wrap gap-20 p-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={reactJs}
              alt=""
              className="w-[60px] hover:scale-110 transition duration-200"
            />
            <p>ReactJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={tail}
              alt=""
              className="w-[60px] hover:scale-110 transition duration-200"
            />
            <p>TailwindCSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={node}
              alt=""
              className="w-[60px]  bg-green-400 p-1 hover:scale-110 transition duration-200"
            />
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={express}
              alt=""
              className="w-[60px] hover:scale-110 transition duration-200"
            />
            <p>ExpressJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={mongo}
              alt=""
              className="w-[60px] hover:scale-110 transition duration-200"
            />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={redux}
              alt=""
              className="w-[60px] hover:scale-110 transition duration-200"
            />
            <p>Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
