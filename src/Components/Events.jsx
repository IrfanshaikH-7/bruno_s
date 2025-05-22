import React from "react";
import image from "../assets/Events.png";
export default function Events() {
  return (
    <section className="bg-black py-8 px-4 ">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-4xl md:text-6xl font-bold text-white font-afacad text-center mb-4">
          Upcoming Events & Webinars
        </h2>
        <p className="text-[#DFB6B2] font-afacad text-xl text-center max-w-4xl mx-auto mb-12">
          Stay engaged and enhance your Spanish learning journey by
          participating in our upcoming events and webinars. Whether you're a
          beginner or an advanced learner, there's something for everyone!
        </p>
        <div className="bg-[#212121] rounded-lg overflow-hidden shadow-lg">
          {/* Full-width Image with Overlay Text */}
          <div className="relative h-70 w-full ">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-black/50 to-black/20"/>
            <img
              src={image}
              alt="Event"
              className="w-full h-full object-cover object-top"
            />
            {/* Date/Time Overlay - White text on semi-transparent background */}
            <div className="absolute inset-x-0 top-0 flex justify-between p-4 bg-gradient-to-b from-black/40 to-transparent">
              <div className="font-afacad text-white text-lg  px-3 py-1 rounded-full">
                Date: June 17, 2025
              </div>
              <div className="font-afacad text-white text-lg  px-3 py-1 rounded-full">
                Time: 06:00 PM
              </div>
            </div>
          </div>

          {/* Content Section Below Image */}
          <div className="p-4 text-center">
            <h3 className="text-2xl font-bold text-[#DFB6B2] font-afacad mb-1">
              Mastering Spanish ER Verbs in the Present Tense
            </h3>
            <p className="text-[#FBE5D8] font-afacad mb-6">
              Join Pablo in this interactive session focusing on the conjugation
              and usage of Spanish ER verbs in the present tense. Enhance your
              grammar skills with practical examples and exercises.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white rounded-md hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#e5c1bd] px-8 py-2 transition-all duration-300 font-afacad shadow-lg hover:shadow-purple-900/30">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
