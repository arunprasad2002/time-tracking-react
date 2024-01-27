import React from "react";

const Button = ({ children, onClickHandelar, disabled }) => {
  return (
    <button
      onClick={onClickHandelar}
      className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
