import React from 'react';

const Header = () => {
  const navItems = [
    { label: "Home", isActive: true },
    { label: "Events", isActive: false },
    { label: "Propose Event", isActive: false },
    { label: "My Events", isActive: false },
    { label: "Help / FAQ", isActive: false }
  ];

  const socialIcons = [
    { src: "/images/social-icon1.png", alt: "Social icon 1" },
    { src: "/images/social-icon2.png", alt: "Social icon 2" },
    { src: "/images/social-icon3.png", alt: "Social icon 3" },
    { src: "/images/social-icon4.png", alt: "Social icon 4" }
  ];

  return (
    <header className="flex flex-col">
      {/* Top bar with contact info and social icons */}
      <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-2.5 w-full bg-zinc-700 bg-opacity-80 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1296px] max-md:max-w-full">
          {/* Contact Info */}
          <div className="flex gap-6 items-start my-auto text-base text-stone-50">
            <div className="flex gap-2 items-center">
              <img
                loading="lazy"
                src="/images/phone-icon.png"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                alt="Phone icon"
              />
              <div className="self-stretch my-auto">+216 23 800 884</div>
            </div>
            <div className="flex gap-2 items-center whitespace-nowrap">
              <img
                loading="lazy"
                src="/images/email-icon.png"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                alt="Email icon"
              />
              <div className="self-stretch my-auto">eventix@gmail.org</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1 items-start">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                className="object-contain shrink-0 aspect-square w-[27px]"
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="flex flex-wrap gap-5 justify-between self-end mt-7 mr-6 w-full text-base font-medium max-w-[1407px] text-stone-800 max-md:mr-2.5 max-md:max-w-full">
        {/* Logo */}
        <img
          loading="lazy"
          src="/images/logo.png"
          className="object-contain shrink-0 max-w-full aspect-[3.01] w-[226px]"
          alt="Company logo"
        />

        {/* Navigation */}
        <nav className="flex gap-10 items-center self-start mt-1 max-md:max-w-full">
          <div className="flex gap-4 self-stretch my-auto max-md:max-w-full">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`gap-2.5 self-stretch px-4 py-1 whitespace-nowrap ${
                  item.isActive ? 'bg-stone-300' : ''
                } rounded-[34px]`}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex gap-10 self-stretch font-bold text-right text-gray-900">
            <button className="gap-2.5 self-stretch px-6 py-3 border-solid border-[1.5px] border-stone-800 rounded-[118px] max-md:px-5">
              Search
            </button>
            <img
              loading="lazy"
              src="/images/shopping-list 1.png"
              className="object-contain shrink-0 my-auto max-w-full aspect-[3.82] w-[107px]"
              alt="User profile"
            />
            <img
              loading="lazy"
              src="/images/logout 1.png"
              className="object-contain shrink-0 my-auto max-w-full aspect-[3.82] w-[107px]"
              alt="User profile"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
