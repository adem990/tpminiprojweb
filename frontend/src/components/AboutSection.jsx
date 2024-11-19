/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AboutSection = () => {
  return (
    <section className="flex z-10 flex-col justify-center items-center px-16 py-36 mt-20 bg-stone-50 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="/images/event-illustration.png" 
          alt="Event illustration" 
          className="object-contain self-stretch my-auto rounded-xl aspect-[1.06] min-w-[240px] w-[599px] max-md:max-w-full" 
        />
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[557px] max-md:max-w-full">
          <div className="flex flex-col max-w-full font-medium text-stone-800 w-[557px]">
            <h2 className="text-6xl leading-[61px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              Find Top Events for Every Interest
            </h2>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Discover events tailored to your passions, whether it's networking, learning, or entertainment.
            </p>
          </div>
          <a href="#"className="gap-2.5 self-start px-8 py-5 mt-10 text-base font-bold text-right text-gray-900 border-solid border-[1.5px] border-stone-800 rounded-[118px] max-md:px-5">
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
