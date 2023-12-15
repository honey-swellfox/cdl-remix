import React, { useState, useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

import { rawMarkup } from '../../../../../utilities';

const CardContainer = forwardRef((props, ref) => {
  const { face, children, hasImage = false, caption = '', isFullSize } = props;

  return (
    <div
      className={`dialog-card border border-mercury flex flex-col justify-center ${
        face === 'front' ? 'card-front' : 'card-back'
      } items-center p-15 ${
        hasImage ? 'bg-white' : face === 'front' ? 'bg-codgray' : 'bg-porcelain'
      }  absolute w-full rounded`}
      ref={ref}
    >
      {children}
      {caption && caption.length ? (
        <div
          className={`absolute bottom-0 bg-porcelain text-left font-medium ${
            isFullSize ? 'text-20 h-66' : 'text-16 h-60'
          } w-full p-20 z-40`}
        >
          {caption}
        </div>
      ) : null}
    </div>
  );
});

const CardContent = ({
  face,
  isFullSize,
  hasImage = false,
  imageUrl = '',
  text = '',
  caption = '',
}) => {
  const imgSrcTop =
    face === 'front'
      ? hasImage
        ? '/img/logo/card-back-top.svg'
        : '/img/logo/card-front-top.svg'
      : '/img/logo/card-back-top.svg';
  const imgSrcBottom =
    face === 'front'
      ? hasImage
        ? '/img/logo/card-back-bottom.svg'
        : '/img/logo/card-front-bottom.svg'
      : '/img/logo/card-back-bottom.svg';

  let content = '';

  if (hasImage) {
    content = isFullSize ? (
      <div className="absolute overflow-hidden w-full h-full z-30 top-0 left-0 rounded p-15">
        <img src={imageUrl} className="img-cover rounded" />
      </div>
    ) : (
      <>
        <div className="absolute overflow-hidden w-220 h-100 z-30 top-0 left-0 opacity-25">
          <img src={imgSrcTop} className="img-cover" />
        </div>
        <div className="absolute overflow-hidden w-220 h-100 z-30 bottom-0 right-0 opacity-25">
          <img src={imgSrcBottom} className="img-cover" />
        </div>
        <img
          src={imageUrl}
          className={`relative ${caption && caption.length ? 'bottom-20' : ''}`}
        />
      </>
    );
  } else {
    content = (
      <>
        <div className="absolute overflow-hidden w-220 h-100 z-30 top-0 left-0">
          <img src={imgSrcTop} className="img-cover" />
        </div>
        <div className="absolute overflow-hidden w-220 h-100 z-30 bottom-0 right-0">
          <img src={imgSrcBottom} className="img-cover" />
        </div>
        <div
          dangerouslySetInnerHTML={rawMarkup(text)}
          className={`text-center ${
            face === 'front' ? 'text-white' : 'text-codgray'
          } relative z-40`}
        />
      </>
    );
  }

  return content;
};

const FlashCard = (props, ref) => {
  let front = Array.isArray(props.card.front)
    ? props.card.front
    : props.card.front.data;

  let back = Array.isArray(props.card.back)
    ? props.card.back
    : props.card.back.data;

  const [animation, setAnimation] = useState(null);

  let cardWrapRef = useRef(null);
  let cardFrontRef = useRef(null);
  let cardBackRef = useRef(null);

  if (cardWrapRef.current) {
    const frontRect = cardFrontRef.current
      ? cardFrontRef.current.getBoundingClientRect()
      : null;
    const backRect = cardBackRef.current
      ? cardBackRef.current.getBoundingClientRect()
      : null;

    let height = frontRect ? frontRect.rect : 0;
    if (frontRect && backRect) {
      height =
        frontRect.height > backRect.height ? frontRect.height : backRect.height;
    }

    gsap.set(cardWrapRef.current, { perspective: 1000, height });
    gsap.set(cardBackRef.current, { rotationY: -180, height });
    gsap.set(cardFrontRef.current, { height });
  }

  useEffect(() => {
    let tl = gsap.timeline({ paused: true });
    tl.to(cardFrontRef.current, 0.7, { rotationY: 180 })
      .to(cardBackRef.current, 0.7, { rotationY: 0 }, 0)
      .to(cardWrapRef.current, 0.5, { z: 50 }, 0)
      .to(cardWrapRef.current, 0.5, { z: 0 }, 0.5);

    setAnimation(tl);
  }, [cardWrapRef.current]);

  let frontHtml = '';
  let backHtml = '';
  if (front && front.length && front[0].image && front[0].image.length) {
    const { image, isFullSize, caption } = front[0];
    const frontImage = image[0];

    frontHtml = (
      <CardContainer
        face="front"
        ref={cardFrontRef}
        hasImage={true}
        caption={caption}
        isFullSize={isFullSize}
      >
        <CardContent
          face="front"
          hasImage={true}
          imageUrl={frontImage.url}
          isFullSize={isFullSize}
          caption={caption}
        />
      </CardContainer>
    );
  } else if (front && front.length && front[0].text) {
    const { isFullSize, caption, text } = front[0];

    frontHtml = (
      <CardContainer
        face="front"
        ref={cardFrontRef}
        caption={caption}
        isFullSize={isFullSize}
      >
        <CardContent face="front" text={text} />
      </CardContainer>
    );
  }

  if (back && back.length && back[0].image && back[0].image.length) {
    const { image, isFullSize, caption } = back[0];
    const backImage = image[0];

    backHtml = (
      <CardContainer
        face="back"
        ref={cardBackRef}
        hasImage={true}
        caption={caption}
        isFullSize={isFullSize}
      >
        <CardContent
          face="back"
          hasImage={true}
          imageUrl={backImage.url}
          isFullSize={isFullSize}
        />
      </CardContainer>
    );
  } else if (back && back.length && back[0].text) {
    const { isFullSize, caption, text } = back[0];

    backHtml = (
      <CardContainer
        face="back"
        ref={cardBackRef}
        caption={caption}
        isFullSize={back[0].isFullSize}
      >
        <CardContent face="back" text={text} />
      </CardContainer>
    );
  }

  return (
    <div
      ref={cardWrapRef}
      className="card-wrap relative"
      onMouseEnter={() => animation.play()}
      onMouseLeave={() => animation.reverse()}
    >
      {frontHtml}
      {backHtml}
    </div>
  );
};

export default FlashCard;
