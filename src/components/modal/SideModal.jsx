import React from 'react'
import classNames from 'classnames';
import { motion as m } from "framer-motion";

const SideModal = ({ left, right, show, onClose, children }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const variantsModal = {
    open: { opacity: 1, },
    closed: { opacity: 0, },
  };

  const variantsBack = {
    open: { opacity: .5, },
    closed: { opacity: 0, },
  };


  return (
    <>
      <m.div
        animate={show ? "open" : "closed"}
        variants={variants}
        // transition={{type: 'just'}}
        className="w-[100vw] h-screen fixed top-0 z-50 left-0"
      >
        <m.div
          animate={show ? "open" : "closed"}
          variants={variantsBack}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="w-full h-full bg-black opacity-50 cursor-pointer"
          onClick={onClose}
        ></m.div>
        <m.div
          animate={show ? "open" : "closed"}
          variants={variantsModal}
          transition={{ delay: 0.3, duration: 0.2 }}
          className={classNames(
            "bg-white absolute top-0 w-[70vw] h-full px-3 py-6 transition-all md:max-w-[45vw] md:px-6 md:py-10 lg:max-w-[25vw]",
            left && "left-0",
            right && "right-0"
          )}
        >
          {children}
        </m.div>
      </m.div>
    </>
  );
};

export default SideModal
