/*
Main Call-to-Action (CTA) Section

CTA Headline: Ready to Reclaim Your Time?
CTA Text: Stop the mindless scroll. Discover easy activities designed to refresh your mind, boost your focus, or simply help you engage with the world around you.
CTA Button Text: Find Your Next Activity (Links to Ideas Page)
*/

import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-28 relative bg-blue-600">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Ready to Reclaim Your Time?
          </p>
          <p className="text-blue-100 mt-3">
            Stop the mindless scroll. Discover easy activities designed to
            refresh your mind, boost your focus, or simply help you engage with
            the world around you.
          </p>
        </div>
        <div className="mt-4">
          <Link
            to={"/ideas"}
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Find Your Next Activity
          </Link>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
        }}
      ></div>
    </section>
  );
};

export default CTA;
