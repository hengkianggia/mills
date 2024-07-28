"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className,onClick }) => {
  return (
    <button
      className={ twMerge('px-4 py-3 flex justify-center items-center rounded-md text-dark-me font-bold transition-all', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
