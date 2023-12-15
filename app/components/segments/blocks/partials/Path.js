import React, { forwardRef } from 'react';

export const Path = forwardRef(
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
        <path
          ref={ref}
          id={element.id}
          className={`hsq-spot relative ${
            isQuizFinished ? 'show-all' : isActive ? 'active' : ''
          }`}
          d={simplifiedProps.d}
          data-keyword={element.keyword}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      );
    }
  }
);
