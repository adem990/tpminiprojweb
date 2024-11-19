/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  const socialIcons = [
    '/images/social1.png',
    '/images/social2.png',
    '/images/social3.png',
    '/images/social4.png',
  ];
  const pages = ['Home', 'About', 'Events', 'Event Proposal', 'Contact'];

  return (
    <footer className="flex flex-col justify-center items-center px-20 py-36 w-full bg-zinc-700 bg-opacity-80 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1296px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-center h-[407px] max-md:max-w-full">
          <div className="flex flex-col w-[194px]">
            <div className="flex flex-col max-w-full rounded-xl w-[194px]">
              <img
                loading="lazy"
                src="/images/logo.png"
                alt="Company logo"
                className="object-contain w-full rounded-xl aspect-[1.14]"
              />
            </div>
            <nav className="flex gap-3 items-start self-start mt-8">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Link to social media platform ${index + 1}`}
                >
                  <img
                    loading="lazy"
                    src={icon}
                    alt={`Social media icon ${index + 1}`}
                    className="object-contain shrink-0 aspect-square w-[35px]"
                  />
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-10 items-start text-base">
            <div className="flex flex-col">
              <h3 className="font-bold text-white">Pages</h3>
              <nav className="flex flex-col mt-10 text-stone-300">
                {pages.map((page, index) => (
                  <a key={index} href="#" className={index > 0 ? 'mt-5' : ''}>
                    {page}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col text-base font-bold text-white min-w-[240px] w-[403px]">
            <h3>Follow Us On Instagram</h3>
            <img
              loading="lazy"
              src="/images/instagram-feed.png"
              alt="Instagram feed showing event highlights"
              className="object-contain mt-10 max-w-full rounded-xl aspect-[1.14] w-[403px]"
            />
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
