"use client";

import React from "react";

const Button = ({ children, className,onClick }) => {
  return (
    <button
      className={`px-4 py-2 grid place-items-center text-dark-me font-bold rounded-sm transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
