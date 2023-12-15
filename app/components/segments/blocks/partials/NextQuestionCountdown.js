import React, { useEffect } from 'react';

export const NextQuestionCountdown = ({
  isLastQuestion = false,
  countdown,
  setCountdown,
}) => {
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [countdown]);

  return (
    <div>
      {countdown > 0 ? (
        <p className="text-spanishgray text-17">
          {isLastQuestion ? 'Game ends in ' : 'Next Question in '}
          <span className="text-white font-medium">{countdown}s</span>
        </p>
      ) : null}
    </div>
  );
};
