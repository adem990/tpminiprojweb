import React from 'react';
import Button from './Button';

function Hero() {
  const buttons = [
    { text: 'Browse Events', variant: 'primary' },
    { text: 'Search by Location', variant: 'secondary' }
  ];

  return (
    <header data-layername="hero" className="flex flex-col">
      <div data-layername="bg" className="flex flex-col pt-10 pb-24 w-full bg-stone-50 max-md:max-w-full">
        <div className="flex relative flex-col items-center px-20 pt-64 pb-24 w-full min-h-[735px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/hero-background.png"
            alt="Hero background"
            className="object-cover absolute inset-0 size-full"
          />
          <div data-layername="title" className="flex relative flex-col items-center max-w-full w-[929px]">
            <div data-layername="text" className="flex flex-col items-center w-full text-center text-stone-800">
              <h1
                data-layername="findTheBestEventsAroundYou"
                className="text-8xl leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
              >
                Find the Best Events Around You
              </h1>
              <p
                data-layername="exploreUnforgettableExperiencesAndConnectWithYourCommunity"
                className="mt-8 text-xl leading-8 w-[537px] max-md:max-w-full"
              >
                Explore unforgettable experiences and connect with your community
              </p>
            </div>
            <nav data-layername="buttons" className="flex gap-4 items-center mt-10 text-base font-bold text-right">
              {buttons.map((button, index) => (
                <Button key={index} text={button.text} variant={button.variant} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
