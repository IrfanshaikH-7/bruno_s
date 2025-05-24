import React from "react";
import { FaStar } from "react-icons/fa";
import Testimonials from "./Testimonials";

const StudentsReviews = () => {
  return (
    <>
       <div className="main-container hidden md:block max-w-7xl">
      <h3 className="text-center text-3xl  md:text-5xl font-bold my-8">
        What my students say
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
       {
        [1,2,3,4,5,6].map((item, index) => (
          <div className="p-6 rounded-xl bg-[#080808]">
          <h3 className="text-[#DFB6B2] text-2xl text-center font-bold ">
            Nicole
          </h3>
          <p className="text-[#DFB6B2] text-lg text-center font-light mb-2">
            12th December, 2024
          </p>
          <div className="mb-3 text-center">
            <FaStar className="inline-block text-[#FFBF10]" size={24} />
            <FaStar className="inline-block text-[#FFBF10]" size={24} />
            <FaStar className="inline-block text-[#FFBF10]" size={24} />
            <FaStar className="inline-block text-[#FFBF10]" size={24} />
            <FaStar className="inline-block text-[#FFBF10]" size={24} />
          </div>
          <p className="text-[#FBE5D8] text-lg ">
            Bruno is a great teacher! The conversation flows nicely and he is on
            top of correcting your sentences and tying your weak points into
            homework. He makes learning Spanish a fun...
          </p>
          {/* <button className="text-xl font-semibold  mb-3 bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
            See More
          </button> */}
        </div>
        ))
       }

      </div>
        
    </div>
    <Testimonials />
      
    </>
   
  );
};

export default StudentsReviews;
