import { Star } from "lucide-react";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nicole",
      date: "January 16, 2023",
      text: "Bruno is so good! His conversation flows nicely and he is on top of correcting your sentences and typing your weak points into homework. He makes learning Spanish a lot...",
    },
    {
      name: "Claudio",
      date: "January 9, 2023",
      text: "I have now been doing a month worth of lessons with Bruno and I need to say he's an excellent tutor. His lessons are interactive and he really tailors them to all my learning needs in...",
    },
    {
      name: "Kelly",
      date: "September 18, 2024",
      text: "I've been taking lessons with Bruno since Spring '24. He's super prepared and engaging, which makes lessons a pleasure! He tailors lessons to your skill level and goals, keeping progress real.",
    },
    {
      name: "Jaroslav",
      date: "August 29, 2024",
      text: "I'm studying with Bruno for several months already, can see significant progress! Bruno is not only good spanish teacher, but such a nice mentor/tutor.",
    },
    {
      name: "Stefan",
      date: "May 25, 2024",
      text: "I am pleased to provide a recommendation for Bruno, who I've been working with for almost half a year. Bruno is always prepared to teach. He knows where we left off and what we need.",
    },
    {
      name: "Goran",
      date: "May 25, 2024",
      text: "Bruno is a teacher whom I highly recommend. He takes the time to follow your progress and explains things well, which helps you learn quickly.",
    },
  ];

  return (
    <section className="bg-black">
      <div className="main-container">
        <h2 className="text-5xl font-bold font-afacad text-white text-center mb-12">
          What my students say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#212121] rounded-lg p-6 flex flex-col"
            >
              {/* Centered Name, Date and Stars */}
              <div className="text-center mb-4">
                <h3 className="font-bold font-afacad text-[#DFB6B2]">
                  {testimonial.name}
                </h3>
                <div className="font-afacad text-[#DFB6B2] text-xs mt-1">
                  {testimonial.date}
                </div>
                <div className="flex justify-center text-[#FFBF10] mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="font-afacad text-[#FBE5D8] text-sm mb-4 flex-grow">
                {testimonial.text}
              </p>

              {/* See More Button - Left aligned with text color only */}
              <button className="font-afacad text-sm text-[#DFB6B2] hover:text-[#FBE5D8]  self-start transition-colors">
                See More
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white font-afacad px-6 py-2 rounded-md hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
