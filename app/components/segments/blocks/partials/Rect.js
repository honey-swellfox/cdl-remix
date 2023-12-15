import React, { forwardRef } from 'react';

export const Rect = forwardRef(
  (
    { isQuizFinished, isActive, element, onMouseEnter, onMouseLeave, onClick },
    ref
  ) => {
    if (element.properties.length) {
      const simplifiedProps = {};

      for (const prop of element.properties) {
        simplifiedProps[prop.name] = prop.value;
      }

      return (
        <rect
          ref={ref}
          id={element.id}
          className={`hsq-spot relative ${
            isQuizFinished ? 'show-all' : isActive ? 'active' : ''
          }`}
          x={simplifiedProps.x}
          y={simplifiedProps.y}
          width={simplifiedProps.width}
          height={simplifiedProps.height}
          data-keyword={element.keyword}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      );
    }
  }
);
