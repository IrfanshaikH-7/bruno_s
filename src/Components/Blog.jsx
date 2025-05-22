import React from "react";
import image1 from "../assets/Blog1.png";
import image2 from "../assets/Blog2.png";
import image3 from "../assets/Blog3.png";

export default function Blog() {
  return (
    <section className="main-container my-8">
      <h2 className="text-5xl font-afacad font-bold text-white text-center mb-12">
        Blogs
      </h2>
      <p className="text-[#FBE5D8] font-afacad text-center max-w-4xl mx-auto mb-12">
        Read more about latest news from Spanish destinations, or get tips on
        how to prepare to study Spanish at our language schools.
      </p>
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Blog Card 1 */}
        <div className="bg-black rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <img
              src={image1}
              alt="Blog 1"
              className="w-full h-74 rounded-lg object-cover"
            />
          </div>
          <div className="my-4">
            <div className="text-white font-afacad text-sm mb-2">
              January 17, 2025
            </div>
            <h3 className="text-lg font-bold text-[#DFB6B2] font-afacad mb-2">
              Language Summer Camp Online: Benefits for Kids and Teens
            </h3>
            <p className="text-[#FBE5D8]/80 font-afacad text-sm mb-4">
              Summer language programs for kids can be one of the best ways to
              keep them engaged and learning while school is out. Like all
              summer...
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-black rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Blog 2"
              className="w-full h-74 rounded-lg object-cover"
            />
          </div>
          <div className="my-4">
            <div className="text-white font-afacad text-sm mb-2">
              May 08, 2025
            </div>
            <h3 className="text-lg font-bold text-[#DFB6B2] font-afacad mb-2">
              Gender in Spanish: An easy guide to masculine & feminine
            </h3>
            <p className="text-[#FBE5D8]/80 font-afacad text-sm mb-4">
              If you're still mastering gender in Spanish in regards to nouns
              and adjectives, don't despair, not any Latin language. It's
              fundamental. In this article, we're exploring gender in Spanish in
              regards to nouns and adjectives.
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-black rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <img
              src={image3}
              alt="Blog 3"
              className="w-full h-74 rounded-lg object-cover"
            />
          </div>
          <div className="my-4">
            <div className="text-white font-afacad text-sm mb-2">
              January 23, 2025
            </div>
            <h3 className="text-lg font-bold text-[#DFB6B2] font-afacad mb-2">
              A dedicated guide to help you learn the Spanish alphabet quickly
            </h3>
            <p className="text-[#FBE5D8]/80 font-afacad text-sm mb-4">
              Learning Spanish is now easier than ever thanks to the internet.
              With tons of great Spanish content available online, gone are the
              days when you had to jump on a plane.
            </p>
          </div>
        </div>
      </div>

      {/* View All Button with 3-color gradient */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white font-afacad px-6 py-2 rounded-md hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#e5c1bd] transition-all duration-300 shadow-lg hover:shadow-purple-900/30">
          View All
        </button>
      </div>
    </section>
  );
}
