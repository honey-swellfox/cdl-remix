import React, { forwardRef } from 'react';

export const Ellipse = forwardRef(
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
        <ellipse
          id={element.id}
          ref={ref}
          className={`hsq-spot relative ${
            isQuizFinished ? 'show-all' : isActive ? 'active' : ''
          }`}
          cx={simplifiedProps.cx}
          cy={simplifiedProps.cy}
          rx={simplifiedProps.rx}
          ry={simplifiedProps.ry}
          transform={simplifiedProps.transform ?? ''}
          data-keyword={element.keyword}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      );
    }
  }
);
