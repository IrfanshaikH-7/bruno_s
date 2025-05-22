import React from "react";
import image from "../assets/Resources.jpg";

export default function Resources() {
  const resources = [
    {
      title: "Recap Classes To Help Test Your Knowledge",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-purple-300"
        >
          <path
            fillRule="evenodd"
            d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V8.25zm-6 0a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V8.25z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Annotated PDFs From All Your Teachers",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-purple-300"
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875z"
            clipRule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
        </svg>
      ),
    },
    {
      title: "Homework For Each Lesson And A Self-Study Area",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-purple-300"
        >
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
    },
    {
      title: "Blog Filled With Additional Resources And Tips",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-purple-300"
        >
          <path
            fillRule="evenodd"
            d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
            clipRule="evenodd"
          />
          <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.875 1.875 0 01-3.75 0V6.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-black py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-afacad font-bold text-white text-center mb-4">
          Keep Learning At Any Time
        </h2>
        <p className="text-[#DFB6B2] font-afacad text-center max-w-3xl mx-auto mb-12 text-base sm:text-lg">
          To help you build on everything you're learning, you have access, any
          time you want, to lots of great resources.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {resources.slice(0, 2).map((res, idx) => (
              <div
                key={idx}
                className="bg-black/40 rounded-xl p-4 border border-purple-900/20 hover:border-purple-900/40 transform hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-800/30 flex items-center justify-center border border-purple-700/30">
                    {res.icon}
                  </div>
                  <h3 className="text-sm font-medium text-[#DFB6B2] font-afacad">
                    {res.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center order-1">
            <img
              src={image}
              alt="Learning Resources"
              className="rounded-3xl w-full max-w-sm sm:max-w-md h-60 object-cover shadow-xl border border-purple-900/30 transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {resources.slice(2).map((res, idx) => (
              <div
                key={idx}
                className="bg-black/40 rounded-xl p-4 border border-purple-900/20 hover:border-purple-900/40 transform hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-800/30 flex items-center justify-center border border-purple-700/30">
                    {res.icon}
                  </div>
                  <h3 className="text-sm font-medium text-[#DFB6B2] font-afacad">
                    {res.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
