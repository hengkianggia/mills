import React from 'react'

import { MdVisibility } from "react-icons/md";


const Input = ({ label, type = "text", placeholder, className }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <p className="text-xs text-gray-300">{label}</p>}
      <div className="w-full min-h-8 flex items-center border-gray-me border-2 rounded-sm">
        <input
          type={type}
          className="w-full h-full px-3 text-xs py-4 "
          placeholder={placeholder}
        />
        {type == "password" && <MdVisibility size={22} className='px-3'/>}
      </div>
    </div>
  );
};

export default Input