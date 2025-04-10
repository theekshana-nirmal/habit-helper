import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 h-screen">
          <div className="max-w-screen-lg md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Finding Balance, One Break at a Time
            </h3>
            <p className="mt-3 text-gray-600">
              Hello! I’m Theekshana Nirmal, an ICT undergraduate at Uva Wellassa
              University, Sri Lanka. I created Habit Helper as a personal
              project because, like many people, I noticed how much time could
              vanish into mindless phone scrolling. I wanted to build a simple
              tool for myself and others looking for a quick, positive
              alternative.
              <br />
              This site gathers easy-to-start activities often screen-free that
              can help break that cycle. It’s about finding small ways to be
              more present, creative, or just take a mindful pause during the
              day.
              <br />
              Habit Helper isn't anti-technology; it's pro-balance. The goal is
              to provide readily available, simple ideas to help you step away
              from the screen intentionally, even if just for five minutes.
              <br />
              Whether you need a moment of calm, a burst of creativity, or just
              a different way to engage your mind, I hope you find something
              helpful here. Thank you for visiting!
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <Link
              to={"/ideas"}
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
