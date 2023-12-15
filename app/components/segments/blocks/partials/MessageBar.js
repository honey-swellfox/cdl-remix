import React from 'react';
import Lottie from 'lottie-react';

import correctAnswerAnimation from '../../../../../../../../web/img/correctAnswerAnimation.json';
import { NextQuestionCountdown } from './NextQuestionCountdown';

export const MessageBar = ({
  message,
  countdown,
  setCountdown,
  isLastQuestion,
}) => {
  return (
    <div className="absolute top-0 left-0 pl-10 pr-20 flex items-center justify-between bg-codgray h-60 w-full z-90">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Lottie
            animationData={correctAnswerAnimation}
            loop={false}
            style={{ width: '52px', height: '52px' }}
          />

          <span className="text-lima text-22 font-medium">{message}</span>
        </div>
        <NextQuestionCountdown
          countdown={countdown}
          setCountdown={setCountdown}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </div>
  );
};
