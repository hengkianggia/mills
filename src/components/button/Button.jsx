"use client";

import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-2 grid place-items-center text-white font-bold rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
