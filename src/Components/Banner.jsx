import React from "react";

export default function Banner() {
  return (
    <section className="py-8">
      <div className="main-container flex items-center justify-center gap-4">
        <h1 className="font-afacad text-white text-3xl md:text-5xl font-bold">
          New{" "}
          <span className="font-afacad text-transparent bg-clip-text bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
            Language
          </span>
        </h1>
        <div className="text-white text-2xl md:text-4xl">✦</div>
        <h1 className="font-afacad text-white text-3xl md:text-5xl font-bold">
          New{" "}
          <span className="font-afacad text-transparent bg-clip-text bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
            Opportunities
          </span>
        </h1>
      </div>
    </section>
  );
}
