import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";

function Courses() {
  return (
    <>
      <section id="hero" className="bg-black py-8">
        <div className="main-container">
          <h1 className="text-6xl text-center font-bold mb-3">Courses</h1>
          <p className="text-[#FBE5D8] text-4xl text-center font-light">
            Choose to study Spanish at Bruno S in Madrid
          </p>
        </div>
      </section>

      <section id="cards" className="bg-black pb-8">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const isLastOdd =
                courses.length % 2 !== 0 && index === courses.length - 1;

              return (
                <div
                  key={course.id}
                  className={`rounded-2xl overflow-hidden bg-[#080808] flex flex-col h-full drop-shadow-[0_4px_10px_#532959]
              ${isLastOdd ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}`}
                >
                  <div className="w-full">
                    <img
                      src={course.imagePath}
                      alt={`Course id ${course.id}`}
                      className="object-cover w-full h-64"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-[#DFB6B2] text-4xl font-bold mb-3">
                      {course.title}
                    </h3>
                    <p className="text-[#FBE5D8] text-xl font-light mb-4 flex-grow">
                      {course.excerpt}
                    </p>
                    <Link
                      to={`/courses/${course.id}`}
                      className="text-2xl bg-black block py-2 text-center mt-auto"
                    >
                      <span className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
                        Start Learning
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
