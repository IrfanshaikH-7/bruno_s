import React from "react";
import image from "../assets/About.jpg";
import spain from "../assets/spain.png";
import english from "../assets/english.png";
import logo from "../assets/NEW.png";

export default function About() {
  return (
    <div className="relative mx-auto bg-[#000000] py-24 overflow-hidden">
      <div className="main-container">
        {/* Top section with image and text */}
        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left: Image with purple strip */}
          <div className="relative flex justify-center">
            {/* Purple Tilted Strip - Left */}
            <div className="absolute -left-4 top-10 -rotate-12 w-50 h-15 bg-[#19001c] rounded-lg z-0"></div>

            <img
              src={image}
              alt="Bruno S"
              className="rounded-xl w-full md:w-[95%] max-w-[500px] h-auto object-cover shadow-lg relative z-10"
            />
          </div>

          {/* Right: Text with purple strip below */}
          <div className="text-white relative">
            <h2 className="text-7xl font-extrabold mb-4">
              <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-transparent bg-clip-text">
                Bruno S.
              </span>
            </h2>
            <p className="light-txt-color text-xl mb-4 pr-16">
              Native Spanish Conversational-Based Teacher · Wide National and
              International Background
            </p>
            <p className="primary-txt-color text-lg leading-relaxed mb-4">
              I'm currently based in the north of Spain, though I've lived in
              Windsor, Poland for a couple years. I have three and a half years
              of teaching experience, online and in person. My degree in Sports
              Sciences provided me with strong teaching methodologies that I
              apply in Spanish lessons.
            </p>
            <p className="primary-txt-color text-lg leading-relaxed mb-4">
              I'm passionate about languages and cultures. I'm learning three
              new languages and understand how it feels to start from scratch
              and connect through communication.
            </p>
            <p className="primary-txt-color text-lg leading-relaxed mb-4">
              Currently, I'm learning Polish, which is very different from
              Spanish and English. I'm always exploring new places, spiritual
              ideas, and cultures worldwide.
            </p>

            <button className="font-afacad mt-2 text-lg px-5 py-2 border border-white primary-txt-color rounded-md hover:bg-white hover:text-black transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Bottom: Languages */}
        <div className="mt-16 text-center relative z-10">
          <h3 className="text-white font-afacad text-2xl font-semibold mb-8">
            I Speak
          </h3>
          <div className="flex justify-center gap-16 flex-wrap">
            {/* Spanish */}
            <div className="flex items-center relative bg-[#180018] rounded-full py-3.5 pl-14 pr-6 ">
              <div className="w-12 h-12 absolute left-0 rounded-full overflow-hidden">
                <img
                  src={spain}
                  alt="Spanish"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-afacad text-white text-lg font-semibold -mt-px">Spanish</span>
            </div>
            
            {/* English */}
            <div className="flex items-center relative bg-[#180018] rounded-full py-3.5 pl-14 pr-4 ">
              <div className="w-12 h-12 absolute left-0 rounded-full overflow-hidden">
                <img
                  src={english}
                  alt="English"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-afacad text-white text-lg font-semibold -mt-px">English</span>
            </div>

            {/* Italian */}
            <div className="flex items-center relative bg-[#180018] rounded-full py-3.5 pl-14 pr-4 ">
              <div className="w-12 h-12 absolute left-0 rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Italian"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-afacad text-white text-lg font-semibold -mt-px">Italian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
