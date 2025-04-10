import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { activityIdeas } from "./../data/activityIdeas";
import { ImCool2 } from "react-icons/im";

const Ideas = () => {

  return (
    <>
      <Header />
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Things To Do Instead of Scrolling
              </h3>
              <p className="mt-3">
              Here’s your list of simple activities to try when you feel like scrolling. Click on any card to see the full description and get started!
              </p>
            </div>
            <div
              className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
              style={{
                background:
                  "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              }}
            ></div>
          </div>
          <div className="relative mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activityIdeas.map((idea) => (
                <div key={idea.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center gap-2">
                  <ImCool2 className="text-blue-500"/>
                  <h4 className="text-xl font-semibold">{idea.title}</h4>
                  </div>
                  
                  <p className="mt-2 text-gray-600">{idea.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Ideas;
