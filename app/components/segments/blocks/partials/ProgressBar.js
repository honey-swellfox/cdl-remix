import React, { useState, useEffect } from 'react';

export const ProgressBar = ({ value, max }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const calculatedWidth = (value / max) * 100;
    setProgressWidth(calculatedWidth);
  }, [value, max]);

  return (
    <div className="flex items-center">
      <p className="text-white font-medium mr-10 text-17">
        {value}/{max}
      </p>
      <div className="bg-alto rounded-3 w-100 h-6">
        <div
          className="bg-blueribbon rounded-3 h-full"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
};
