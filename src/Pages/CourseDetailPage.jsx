import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { getCourseById } from "../firebase/actions";
import { Loader2 } from "lucide-react";

function CourseDetails() {
  const { id } = useParams();


  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const courseData = await getCourseById(id);
        setCourse(courseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Course:", error);
        setIsLoading(false);
        setCourse(null);
      }
    };
    if (id) {
      fetchCourse();
    }
  }, [id]);


  return (
    <>
      {
        isLoading ? <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
          <Loader2 className="animate-spin h-8 w-8" />
        </section> : (
          <>
            <section id="hero" className="my-8 pt-24 md:pt-24 bg-black">
              <div className="main-container">
                <div className="relative ">
                  <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 z-20 h-full w-full" />
                  <img
                    src={course?.coverImage}
                    alt={`Course id ${course?.id}`}
                    className="object-cover w-full h-36 md:h-[70vh] rounded-xl"
                  />

                </div>

                <h1 className="text-[#DFB6B2] text-4xl md:text-6xl font-bold my-3">
                  {course?.title}
                </h1>
          
                <div className="my-5 md:flex flex-col md:justify-between">
                  <StarRating rating={course?.ratings} />
                  <p className="text-lg md:text-xl my-2 md:my-0">
                    {course?.ratings} ({course?.reviews} reviews )
                  </p>
                  <p className="text-lg md:text-xl my-2 md:my-0">
                    {course?.studentsEnrolled} enrolled on this course
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-1 ">Description</h3>
                  <p className="text-lg md:text-xl font-light mb-5 leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-2">Requirements</h3>
                  <div className="prose lg:prose-xl -ml-2 text-white dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: course?.requirements }} />

                </div>

                <div className="text-2xl text-center py-4 mb-2 border-[1px] border-[white] rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
                  Price: ${course?.price}
                </div>
                <button className="w-full text-2xl text-center py-4 mb-2 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                  Schedule a call
                </button>
              </div>
            </section>

            <section id="reviews" className="my-8">

            </section>
          </>
        )
      }


    </>
  );
}

export default CourseDetails;
