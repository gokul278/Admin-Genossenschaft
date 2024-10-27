import React from "react";

const About = () => {
  return (
    <div className="w-[95%] h-[95vh] flex-col bg-[#fff] rounded-md flex flex-wrap justify-start items-center overflow-y-auto">
      <div className="w-[80%] flex flex-wrap justify-start items-center gap-10 my-10">
        <div className="w-[300px] h-[200px] bg-[#1f2937] rounded-lg shadow-lg cursor-pointer flex justify-center items-center px-5 py-5">
          <p className="font-mont text-[25px] font-bold text-[#fff]">
            Main Content
          </p>
        </div>

        <div className="w-[300px] h-[200px] bg-[#1f2937] rounded-lg shadow-lg cursor-pointer flex justify-center items-center px-5 py-5">
          <p className="font-mont text-[25px] font-bold text-[#fff]">
            Details Content
          </p>
        </div>

        <div className="w-[300px] h-[200px] bg-[#1f2937] rounded-lg shadow-lg cursor-pointer flex justify-center items-center px-5 py-5">
          <p className="font-mont text-[25px] font-bold text-[#fff]">
            Our Vision
          </p>
        </div>

        <div className="w-[300px] h-[200px] bg-[#1f2937] rounded-lg shadow-lg cursor-pointer flex justify-center items-center px-5 py-5">
          <p className="font-mont text-[25px] font-bold text-[#fff]">
            Our Mission
          </p>
        </div>

        <div className="w-[300px] h-[200px] bg-[#1f2937] rounded-lg shadow-lg cursor-pointer flex justify-center items-center px-5 py-5">
          <p className="font-mont text-[25px] font-bold text-[#fff] text-center">
            Baseline
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
