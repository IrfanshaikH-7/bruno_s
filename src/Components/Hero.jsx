import React from "react";
export default function Hero() {
  return (
    <div className="relative">
      {/* Left vertical strip - 19% opacity */}
      <div
        className="absolute left-0 rounded-3xl bg-[#dfb6b2]/[19%]"
        style={{
          width: "35px",
          height: "70%",
          top: "18%",
        }}
      ></div>

      {/* Right vertical strip - 19% opacity */}
      <div
        className="absolute right-0 rounded-3xl bg-[#dfb6b2]/[19%]"
        style={{
          width: "35px",
          height: "70%",
          top: "18%",
        }}
      ></div>

      <section className="container mx-auto py-16 px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span>A </span>
          <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] text-transparent bg-clip-text">
            Unique
          </span>{" "}
          <span className="font-afacad block md:inline">
            approach to learning Spanish <br className="hidden md:block" />
            language online
          </span>
        </h1>
        <p className="font-afacad text-[#FBE5D8] max-w-3xl mx-auto mb-8">
          Broaden your global communication skills with online Spanish courses
          and professional certificates. Learn grammar, vocabulary, and cultural
          knowledge to access new perspectives and career opportunities.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="font-afacad px-6 py-2 bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white rounded-lg hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#5d2f63] transition-all shadow-lg hover:shadow-purple-900/30">
            Schedule a call
          </button>
          <button className="font-afacad px-6 py-2 border border-white text-white rounded-md">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
}
