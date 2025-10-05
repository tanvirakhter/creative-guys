
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Transform Your Digital Presence
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our comprehensive digital marketing solutions are designed to elevate your brand 
            and drive measurable business growth across all channels.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Expert Digital Marketing</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built on data-driven strategies and creative excellence, our digital marketing solutions 
              seamlessly integrate into your business operations, delivering consistent results across 
              content creation, social media, SEO, and campaign management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
