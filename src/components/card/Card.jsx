import React from 'react'

const Card = ({children, className}) => {
  return (
    <div
      className={`w-full shadow-lg rounded-md px-4 py-8 bg-white flex flex-col mt-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card