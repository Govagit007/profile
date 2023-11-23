import React from "react";

const Career = () => {
  return (
    <div
      className="w-full flex flex-col gap-8 justify-center items-center "
      id="career"
    >
      <h1 className="text-2xl">EDUCATION</h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-[300px] md:w-3/5 bg-neutral-600 h-[80px] flex md:flex-row justify-between items-center hover:scale-110 transition duration-500 rounded-md ">
          <div className="w-full flex flex-col justify-center items-start p-4">
            <h1>
              ✓ B.Tech-- NIT UTTRAKHAND <span className="md:hidden">-2023</span>{" "}
            </h1>
            <h1> - Srinagar Gharhwal, Uttrakhand</h1>
          </div>
          <div className="hidden md:flex justify-center items-center h-full mr-4 w-auto text-xl">
            -2023
          </div>
        </div>
        <div className=" w-[300px] md:w-3/5 bg-neutral-500 h-[80px] flex md:flex-row justify-between items-center hover:scale-110 transition duration-500 rounded-md ">
          <div className="w-full flex flex-col justify-center items-start p-4 ">
            <h1>
              ✓ Inter--NARAYANA COLLEGE <span className="md:hidden">-2019</span>{" "}
            </h1>
            <h1> - Srinagar Gharhwal, Uttrakhand</h1>
          </div>
          <div className="hidden md:flex justify-center items-center h-full mr-4 w-auto text-xl">
            -2019
          </div>
        </div>
        <div className=" w-[300px] md:w-3/5 bg-neutral-600 h-[80px] flex md:flex-row justify-between items-center hover:scale-110 transition duration-500 rounded-md ">
          <div className="w-full flex flex-col justify-center items-start p-4">
            <h1>
              ✓ 10TH-- B.V.S High School{" "}
              <span className="md:hidden">-2017</span>{" "}
            </h1>
            <h1> - Ongole, Andhra Pradesh</h1>
          </div>
          <div className="hidden md:flex justify-center items-center h-full mr-4 w-auto text-xl">
            -2017
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
