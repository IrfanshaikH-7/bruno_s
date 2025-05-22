import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WhyLearn from "../Components/WhyLearn";
import LearningOnline from "../Components/LearningOnline";
import VideoSection from "../Components/VideoSection";
import Resources from "../Components/Resources";
import Events from "../Components/Events";
import Blog from "../Components/Blog";
import Testimonials from "../Components/Testimonials";
import Stats from "../Components/Stats";
import FAQ from "../Components/FAQ";
import Banner from "../Components/Banner";
import StudentsReviews from "../Components/StudentsReviews";

const Home = () => {
  return (
    <>
      <section id="hero" className="my-8">
        <Hero />
      </section>
      <section id="about" className="my-8">
        <About />
      </section>
      <WhyLearn />
      <LearningOnline />
      <VideoSection />
      <Resources />
      <Events />
      <Blog />
      <section id="testimonials" className="bg-black py-8">
        <StudentsReviews />
      </section>
      <Stats />
      <FAQ />
      <Banner />
    </>
  );
};

export default Home;
