import React from 'react';

function Button({ text, variant }) {
  const baseClasses = "gap-2.5 self-stretch px-8 py-5 my-auto rounded-[118px] max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-pink-800",
    secondary: "text-gray-900 border-solid border-[1.5px] border-stone-800"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {text}
    </button>
  );
}

export default Button;