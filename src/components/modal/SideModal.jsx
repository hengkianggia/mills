import React from 'react'
import classNames from 'classnames';

const SideModal = ({ left, right, show, onClose, children }) => {
  return (
    <>
      {show && (
        <div className="w-[100vw] h-screen fixed top-0 z-50 left-0">
          <div
            className="w-full h-full bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div
            className={classNames(
              "bg-white absolute top-0 w-[70vw] h-full px-3 py-6 transition-all md:max-w-[45vw] md:px-6 md:py-10 lg:max-w-[25vw]",
              left && "left-0",
              right && "right-0"
            )}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default SideModal
