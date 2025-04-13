/*
Hero Section

Main Headline: Tired of Endless Scrolling?
Sub-headline/Paragraph: Discover simple, refreshing things you can do right now instead of getting lost in your phone. Reclaim your moments, find your focus.
Primary CTA Button Text: Explore Activities Now (Links to Ideas Page)
*/

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
          Tired of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
            Endless Scrolling?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Discover simple, refreshing things you can do right now instead of
            getting lost in your phone. Reclaim your moments, find your focus.
          </p>
          <div className="items-center justify-center sm:flex">
            <Link
              to={"/ideas"}
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full shadow-lg hover:shadow-none"
            >
              Explore Activities Now
            </Link>
          </div>
        </div>
        <div className="mt-14 flex justify-center items-center">
          <img
            src="/src/assets/images/ideas.png"
            className="w-90"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
