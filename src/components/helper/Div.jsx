import classNames from 'classnames';
import React, { forwardRef, memo } from 'react'

const Div = memo(
  forwardRef(
    (
      {
        children,
        flex,
        between,
        center,
        justifyCenter,
        itemsCenter,
        grid,
        className,
        relative,
        absolute,
        fixed,
        full,
        superTop,
        column,
        wrap,
        maxWidth,
      },
      ref
    ) => {
      return (
        <div
          ref={ref}
          className={classNames(
            flex && "flex",
            center && "flex justify-center items-center",
            column && "flex-col",
            between && "flex justify-between items-center",
            justifyCenter && "justify-center",
            itemsCenter && "items-center",
            grid && "grid",
            relative && "relative",
            absolute && "absolute",
            fixed && "fixed",
            full && "w-full",
            superTop && "z-50",
            wrap && "w-full flex flex-col items-center",
            maxWidth && "max-w-screen-maxxx",
            className
          )}
        >
          {children}
        </div>
      );
    }
  )
);

export default Div