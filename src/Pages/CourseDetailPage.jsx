import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import StarRating from "../Components/StarRating";
import { FaStar } from "react-icons/fa";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div className="p-6 text-red-600">Course not found!</div>;
  }

  return (
    <>
      <section id="hero" className="my-8 pt-24 md:pt-24 bg-black">
        <div className="main-container">
          <div className="relative ">
            <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 z-20 h-full w-full rounded-xl"/>
          <img
            src={course.imagePath}
            alt={`Course id ${course.id}`}
            className="object-cover w-full h-36 md:h-[70vh] rounded-xl"
          />
            
          </div>
         
          <h1 className="text-[#DFB6B2] text-4xl md:text-6xl font-bold my-3">
            {course.title}
          </h1>
          <p className="text-[#FBE5D8] text-2xl md:text-4xl font-light my-3">
            {course.excerpt}
          </p>
          <div className="my-5 md:flex md:justify-between">
            <StarRating rating={course.ratings} />
            <p className="text-xl my-2 md:my-0">
              {course.ratings} ({course.reviews} reviews )
            </p>
            <p className="text-xl my-2 md:my-0">
              {course.enrollments} enrolled on this course
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-5">Description</h3>
            <p className="text-2xl md:text-4xl font-light my-5">{course.description}</p>
          </div>

          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-5">Requirements</h3>
            <ul className="list-disc list-outside ml-8 text-[#FBE5D8] text-2xl md:text-4xl font-light my-5">
              {course.requirements.map((requirement, index) => (
                <li key={index} className="!list-item">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-2xl text-center py-4 mb-2 border-[1px] border-[white] rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
            Price: ${course.price}
          </div>
          <button className="w-full text-2xl text-center py-4 mb-2 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
            Schedule a call
          </button>
        </div>
      </section>

      <section id="reviews" className="my-8">
        
      </section>
    </>
  );
}

export default CourseDetails;
