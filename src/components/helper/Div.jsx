import classNames from 'classnames';
import React, { forwardRef, memo } from 'react'

const Div = memo(forwardRef(
  (
    {
      children,
      flex,
      between,
      center,
      justifyCenter,
      grid,
      className,
      relative,
      absolute,
      fixed,
      full,
      superTop,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          flex && "flex",
          center && "flex justify-center items-center",
          grid && "grid",
          relative && "relative",
          absolute && "absolute",
          fixed && "fixed",
          between && "justify-between",
          justifyCenter && "justify-center",
          full && "w-full",
          superTop && "z-50",
          className
        )}
      >
        {children}
      </div>
    );
  }
));

export default Div