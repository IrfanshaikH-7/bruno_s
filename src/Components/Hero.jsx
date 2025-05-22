import React from "react";
export default function Hero() {
  return (
    <section className="w-full mt-20 pb-8 px-4 sm:px-14 text-center relative  z-10">
      <div
        className="absolute hidden md:block w-[50px] h-full top-1/2 -translate-y-1/2 right-0 rounded-3xl bg-[#dfb6b2]/[19%]"
      />
      <div
        className="absolute hidden md:block w-[50px] h-full top-1/2 -translate-y-1/2 left-0 rounded-3xl bg-[#dfb6b2]/[19%]"

      />

      <h1 className="text-5xl md:text-7xl font-bold  text-white max-w-6xl mx-auto">
        <span>A </span>
        <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] text-transparent bg-clip-text">
          Unique
        </span>{" "}
        <span className="font-afacad block md:inline">
          approach to learning Spanish <br className="hidden md:block" />
          language online
        </span>
      </h1>
      <p className="font-afacad mt-6  md:text-xl text-[#FBE5D8] max-w-4xl mx-auto mb-16">
        Broaden your global communication skills with online Spanish courses
        and professional certificates. Learn grammar, vocabulary, and cultural
        knowledge to access new perspectives and career opportunities.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row justify-center text-xl">
        <button className=" cursor-pointer font-afacad px-16 py-3 bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white rounded-lg hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#5d2f63] transition-all shadow-lg hover:shadow-purple-900/30">
          Schedule a call
        </button>
        <button className=" cursor-pointer font-afacad px-16 py-3 border border-white  text-white rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#5d2f63]">
          Read More
        </button>
      </div>
    </section>
  );
}
