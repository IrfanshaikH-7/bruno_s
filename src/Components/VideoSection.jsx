import { Youtube } from "lucide-react";
import React, { useState } from "react";
import image from "../assets/Youtube.png";

export default function VideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="main-container my-16">
      <h2 className="text-6xl font-afacad font-bold text-white text-center mb-12">
        See what a Bruno S class looks like
      </h2>

      <div className="rounded-lg overflow-hidden">
        <div className="relative  md:px-7">
        <div
        className="absolute hidden md:block w-[60px] h-3/4 top-1/2 -translate-y-1/2 right-0 rounded-3xl bg-[#dfb6b2]/[19%]"
      />
      <div
        className="absolute hidden md:block w-[60px] h-3/4 top-1/2 -translate-y-1/2 left-0 rounded-3xl bg-[#dfb6b2]/[19%]"
      />
          {playVideo ? (
            <div className="rounded-3xl overflow-hidden">
              <iframe
              className="w-full h-[70vh]  rounded-3xl "
              src="https://www.youtube.com/embed/k7HkJKDYoBc?autoplay=1"
              title="Bruno S Class Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            </div>
            
          ) : (
            <>

<div className="rounded-3xl overflow-hidden">

              <img
                src={image}
                alt="Class preview"
                className="w-full h-[70vh] object-cover"
              />
              <button
                onClick={() => setPlayVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full w-16 h-16 m-auto z-10"
                aria-label="Play video"
              >
                <Youtube className="w-8 h-8 text-white" />
              </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
