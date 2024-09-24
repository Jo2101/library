// imports, styles, components
import React from "react";

const AboutUs = ({ mainHeadline, sections }) => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-10 bg-gray-50">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
        {mainHeadline}
      </h1>
      <div className="max-w-2xl mt-10 text-md text-center text-gray-600 flex-grow">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg  text-gray-700">{section.headline}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
