import React from 'react';

import { ProgressBar } from './ProgressBar';
import { rawMarkup } from '../../../../../utilities';

export const QuestionBar = ({ questions, currentIndex }) => {
  return (
    <div className="absolute top-0 left-0 px-20 flex items-center justify-between bg-codgray h-60 w-full z-90">
      <div className="flex items-center justify-between w-full">
        <div
          className="hsq-question flex items-center"
          dangerouslySetInnerHTML={rawMarkup(questions[currentIndex].question)}
        />
        <ProgressBar value={currentIndex + 1} max={questions.length} />
      </div>
    </div>
  );
};
