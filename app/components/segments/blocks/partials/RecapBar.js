import React from 'react';

export const RecapBar = ({ onClick }) => {
  return (
    <div className="absolute top-0 left-0 px-20 flex items-center justify-between bg-codgray h-60 w-full z-90">
      <div className="flex items-center justify-between w-full">
        <p className="text-22 text-white font-medium">
          That's it! Here's a recap.
        </p>
        <button className="flex items-center" onClick={onClick}>
          <img src="/img/icons/icon-restart-quiz-white.svg" className="mr-6" />
          <p className="text-16 text-white">Restart Game</p>
        </button>
      </div>
    </div>
  );
};
