"use client";

import React, { useState } from "react";
import { FaSortDown, FaSortUp, FaUser } from "react-icons/fa";

const User = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <FaUser onClick={openHandler} />
      {open ? <FaSortUp size={16} /> : <FaSortDown size={16} />}
    </>
  );
};

export default User;
