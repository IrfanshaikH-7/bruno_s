import React from "react";
import image1 from "../assets/LearningOnline1.png";
import image2 from "../assets/LearningOnline2.png";
import image3 from "../assets/LearningOnline3.png";

export default function LearningOnline() {
  return (
    <section className="main-container">
      <h2 className="text-4xl md:text-6xl font-afacad font-bold text-white text-center mt-4 mb-12">
        Learning Online with Bruno S
      </h2>

      {/* Top grid layout */}
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 mb-8">
        {/* Left card */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col p-8">
          <div className="w-full">
            <img
              src={image1}
              alt="Student practicing speaking"
              className="w-full h-[389px] rounded-2xl object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-between  h-full ">
            <h3 className="text-2xl md:text-4xl font-afacad font-bold text-[#DFB6B2] my-2">
              Time to Practise Speaking
            </h3>
            <p className="text-white text-base md:text-2xl">
              "Our classes are designed with the student in mind, so you have
              time to talk and practise your pronunciation."
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col h-full p-8">
          <div className="w-full flex justify-center items-center">
            <img
              src={image2}
              alt="Personalized feedback"
              className="w-full h-[300px] object-cover rounded-2xl object-center"
            />
          </div>
          <div className="flex-1 mt-2">
            <h3 className="text-2xl md:text-5xl  font-afacad font-bold text-[#DFB6B2] mb-2 ">
              Receive Personalised Feedback
            </h3>
            <p className="text-white text-base md:text-3xl">
              "The best way to learn is from your mistakes. Maximise each lesson
              with customised feedback."
            </p>
          </div>
        </div>
      </div>

      {/* Full-width bottom card */}
      <div className="bg-black rounded-lg overflow-hidden mb-8 p-8">
        <div className="w-full">
          <img
            src={image3}
            alt="Different accents"
            className="w-full h-[389px] rounded-xl object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl font-afacad font-bold text-[#DFB6B2] my-2">
            Discover Different Accents
          </h3>
          <p className="text-white text-base md:text-2xl">
            "Train your ears for real-life interactions with access to over
            2,400 international teachers and ways of speaking."
          </p>
        </div>
      </div>
    </section>
  );
}
