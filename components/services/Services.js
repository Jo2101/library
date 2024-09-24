"use client";

//styles, components, imports
import React from "react";
import ImageSlider from "../../components/imageSlider/ImageSlider";

export default function Services({ offers }) {
  return (
    <section className="py-10 min-h-screen">
      <h1 className="text-3xl text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <ImageSlider
              images={offer.images}
              className="w-full h-20 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
            <p className="text-center text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Services.defaultProps = {
  offers: [
    {
      title: "Service One",
      description: "Short description ",
      images: ["/img/prva.jpg", "/img/druga.jpg", "/img/treca.jpg"],
    },
    {
      title: "Service Two",
      description: "Short description",
      images: ["/img/prva.jpg", "/img/druga.jpg"],
    },
    {
      title: "Service Three",
      description: "Short description",
      images: ["/img/prva.jpg", "/img/druga.jpg"],
    },
    {
      title: "Service Four",
      description: "Short description",
      images: ["/img/prva.jpg", "/img/druga.jpg"],
    },
  ],
};
