import React from "react";
import blogs from '../data/blogs'
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <>
      <section id="hero" className="bg-black py-8">
        <div className="main-container">
          <h1 className="text-6xl text-center font-bold mb-3">Blogs</h1>
          <p className="text-[#FBE5D8] text-4xl text-center font-light">
            Read more about latest news from Expanish destinations, or get tips
            on how to prepare to study Spanish at our language schools.
          </p>
        </div>
      </section>

      <section id="cards" className="bg-black pb-8">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((course, index) => {
              const isLastOdd =
                blogs.length % 2 !== 0 && index === blogs.length - 1;

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
                      {course.description}
                    </p>
                    <Link
                      to={`/blogs/${course.id}`}
                      className="text-2xl inline-block w-fit"
                    >
                      <span className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
                        Read More
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
};

export default BlogsPage;
