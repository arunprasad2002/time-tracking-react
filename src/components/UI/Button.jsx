import React from "react";

const Button = ({ children, onClickHandelar, disabled }) => {
  if (disabled) {
    return (
      <button
        onClick={onClickHandelar}
        className="bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
        disabled
      >
        {children}
      </button>
    );
  }

  if (!disabled) {
    return (
      <button
        onClick={onClickHandelar}
        className="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white"
      >
        {children}
      </button>
    );
  }
};

export default Button;
