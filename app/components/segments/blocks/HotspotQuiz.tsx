import React, { useState, useEffect, useRef } from 'react';
import _debounce from 'lodash/debounce';

import { Ellipse } from './partials/Ellipse';
import { Path } from './partials/Path';
import { Rect } from './partials/Rect';
import { MessageBar } from './partials/MessageBar';
import { QuestionBar } from './partials/QuestionBar';
import { RecapBar } from './partials/RecapBar';
import { ProgressBar } from './partials/ProgressBar';
import { WrongAnswer } from './partials/WrongAnswer';

import { rawMarkup } from '../../../../utilities';

function HotspotQuiz({ content }) {
  const { header, duration, questions: questionsData } = content;
  const questions = Array.isArray(questionsData)
    ? questionsData
    : questionsData.data;

  let backgroundImage = Array.isArray(content.backgroundImage)
    ? content.backgroundImage[0]
      ? content.backgroundImage[0].url
      : ''
    : content.backgroundImage.url;

  let backgroundImageAltText = Array.isArray(content.backgroundImage)
    ? content.backgroundImage[0]
      ? content.backgroundImage[0].altText
      : ''
    : content.backgroundImage.altText;

  const imageRef = useRef();
  const [wrongClicks, setWrongClicks] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCorrectMessageBar, setShowCorrectMessageBar] = useState(false);
  const [countdown, setCountdown] = useState(duration);

  let spotRefs = useRef({});
  let titleRefs = useRef({});
  const questionTitleIds = [];
  const questionIds = [];
  const initQStatuses = {};

  for (const [idx, question] of questions.entries()) {
    const elements = JSON.parse(question.elements);
    questionIds[`q${question.id}`] = React.createRef();

    for (const element of elements) {
      questionTitleIds[`${question.id}-${element.id}`] = React.createRef();
      initQStatuses[`${question.id}-${element.id}`] =
        idx === currentIndex ? true : false;
    }
  }

  const [questionStatuses, setQuestionStatuses] = useState(initQStatuses);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  const debouncedHandleResize = _debounce(function () {
    setWrongClicks([]);
  }, 500);

  useEffect(() => {
    if (countdown === 0) {
      const newQStatuses = {};
      if (currentIndex !== questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setWrongClicks([]);

        for (const [idx, question] of questions.entries()) {
          const elements = JSON.parse(question.elements);
          for (const element of elements) {
            newQStatuses[`${question.id}-${element.id}`] =
              idx === currentIndex + 1 ? true : false;
          }
        }

        setQuestionStatuses(newQStatuses);
      } else {
        setIsQuizFinished(true);
      }
      setShowCorrectMessageBar(false);
      setCountdown(duration);
    }
  }, [countdown, currentIndex, questions, duration]);

  spotRefs.current = questionTitleIds;
  titleRefs.current = questionIds;

  const restartQuiz = () => {
    setIsQuizFinished(false);
    setCurrentIndex(0);

    for (const [idx, question] of questions.entries()) {
      const elements = JSON.parse(question.elements);
      for (const element of elements) {
        initQStatuses[`${question.id}-${element.id}`] =
          idx === 0 ? true : false;
      }
    }

    setQuestionStatuses(initQStatuses);
  };

  const handleHoverTitle = (e, type, question) => {
    const elements = JSON.parse(question.elements);

    if (type === 'enter') {
      for (let num = 0; num < elements.length; num++) {
        const element = elements[num];
        spotRefs.current[`${question.id}-${element.id}`].current.classList.add(
          'hovered'
        );
        spotRefs.current[
          `${question.id}-${element.id}`
        ].current.classList.remove('show-all');
      }
    }

    if (type === 'leave') {
      for (let num = 0; num < elements.length; num++) {
        const element = elements[num];
        spotRefs.current[
          `${question.id}-${element.id}`
        ].current.classList.remove('hovered');
        spotRefs.current[`${question.id}-${element.id}`].current.classList.add(
          'show-all'
        );
      }
    }
  };

  const handleHoverSpot = (e, type, question) => {
    if (isQuizFinished) {
      const elementId = e.target.id;

      if (type === 'enter') {
        titleRefs.current[`q${question.id}`].current.classList.add('hovered');

        spotRefs.current[
          `${question.id}-${elementId}`
        ].current.classList.remove('show-all');
        spotRefs.current[`${question.id}-${elementId}`].current.classList.add(
          'hovered'
        );
      }

      if (type === 'leave') {
        titleRefs.current[`q${question.id}`].current.classList.remove(
          'hovered'
        );

        spotRefs.current[`${question.id}-${elementId}`].current.classList.add(
          'show-all'
        );
        spotRefs.current[
          `${question.id}-${elementId}`
        ].current.classList.remove('hovered');
      }
    }
  };

  const handleWrongClick = (e) => {
    if (!isQuizFinished && !showCorrectMessageBar) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - 12;
      const y = e.clientY - rect.top - 12;

      setWrongClicks([...wrongClicks, { x, y }]);
    }
  };

  const handleCorrectClick = (e, question) => {
    const keyword = e.target.dataset.keyword;
    setWrongClicks([]);
    const currentQuestion = questions[currentIndex];

    if (
      currentQuestion.id === question.id &&
      currentQuestion.keyword === keyword
    ) {
      spotRefs.current[`${question.id}-${e.target.id}`].current.classList.add(
        'correct'
      );

      setShowCorrectMessageBar(true);
    }
  };

  let svgElements = '';

  if (questions && questions.length) {
    svgElements = questions.map((question, idx) => {
      const elements = JSON.parse(question.elements);

      if (elements.length) {
        return elements.map((el, elIdx) => {
          switch (el.type) {
            case 'ellipse':
              return (
                <Ellipse
                  key={elIdx}
                  ref={spotRefs.current[`${question.id}-${el.id}`]}
                  element={el}
                  isActive={questionStatuses[`${question.id}-${el.id}`]}
                  isQuizFinished={isQuizFinished}
                  onMouseEnter={(e) => handleHoverSpot(e, 'enter', question)}
                  onMouseLeave={(e) => handleHoverSpot(e, 'leave', question)}
                  onClick={(e) => handleCorrectClick(e, question)}
                />
              );
            case 'path':
              return (
                <Path
                  key={elIdx}
                  ref={spotRefs.current[`${question.id}-${el.id}`]}
                  element={el}
                  isActive={questionStatuses[`${question.id}-${el.id}`]}
                  isQuizFinished={isQuizFinished}
                  onMouseEnter={(e) => handleHoverSpot(e, 'enter', question)}
                  onMouseLeave={(e) => handleHoverSpot(e, 'leave', question)}
                  onClick={(e) => handleCorrectClick(e, question)}
                />
              );
            case 'rect':
              return (
                <Rect
                  key={elIdx}
                  ref={spotRefs.current[`${question.id}-${el.id}`]}
                  element={el}
                  isActive={questionStatuses[`${question.id}-${el.id}`]}
                  isQuizFinished={isQuizFinished}
                  onMouseEnter={(e) => handleHoverSpot(e, 'enter', question)}
                  onMouseLeave={(e) => handleHoverSpot(e, 'leave', question)}
                  onClick={(e) => handleCorrectClick(e, question)}
                />
              );
            default:
              break;
          }
        });
      }
    });
  }

  return (
    <div className="bg-porcelain mb-40 px-20 pt-30 pb-20">
      <div className="flex justify-center items-center">
        <div className="flex-shrink-0 w-full">
          {header ? (
            <h3 className="mb-20 text-20 font-medium text-nevada">{header}</h3>
          ) : null}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative overflow-hidden flex flex-col justify-center w-full border-l border-t border-b border-porcelain">
          {questions && questions.length ? (
            <div className="relative">
              {showCorrectMessageBar ? (
                <MessageBar
                  message="That's correct!"
                  countdown={countdown}
                  setCountdown={setCountdown}
                  isLastQuestion={
                    currentIndex === questions.length - 1 ? true : false
                  }
                />
              ) : isQuizFinished ? (
                <RecapBar onClick={restartQuiz} />
              ) : questions && questions.length ? (
                <QuestionBar
                  questions={questions}
                  currentIndex={currentIndex}
                />
              ) : null}
              <svg
                id="truck"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 650 450"
                xmlSpace="preserve"
                className="mb-15"
              >
                <image
                  overflow="visible"
                  xlinkHref={backgroundImage}
                  height="450"
                  width="650"
                  onClick={handleWrongClick}
                />
                {svgElements}
              </svg>
              {wrongClicks.length
                ? wrongClicks.map((circle, idx) => (
                    <WrongAnswer key={idx} circle={circle} />
                  ))
                : null}
            </div>
          ) : null}

          {isQuizFinished ? (
            <div>
              <h3 className="mb-10 text-20 font-medium text-codgray">
                Summary
              </h3>
              {questions && questions.length ? (
                <ol className="hsq-ol">
                  {questions.map((question, idx) => {
                    return (
                      <li key={idx} className="text-14 text-mineshaft">
                        <span
                          ref={titleRefs.current[`q${question.id}`]}
                          className="hsq-title font-medium"
                          onMouseEnter={(e) =>
                            handleHoverTitle(e, 'enter', question)
                          }
                          onMouseLeave={(e) =>
                            handleHoverTitle(e, 'leave', question)
                          }
                        >
                          {question.hotspotTitle}
                        </span>{' '}
                        - {question.description}
                      </li>
                    );
                  })}
                </ol>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HotspotQuiz;
