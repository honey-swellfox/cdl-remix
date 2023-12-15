import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { rawMarkup } from '../../../../../utilities';

const DialogCard = ({ card: { text, answer } }, ref) => {      
    const [animation, setAnimation] = useState(null);

    let cardWrapRef = useRef(null);
    let cardFrontRef = useRef(null);
    let cardBackRef = useRef(null); 

    if (cardWrapRef.current) {
        const frontRect = cardFrontRef.current.getBoundingClientRect();
        const backRect = cardBackRef.current.getBoundingClientRect();

        let height = frontRect.rect;
        height = frontRect.height > backRect.height ? frontRect.height : backRect.height;

        gsap.set(cardWrapRef.current, { perspective: 1000, height });
        gsap.set(cardBackRef.current, { rotationY:-180, height });
        gsap.set(cardFrontRef.current, { height });
    }
  
    useEffect(() => {
        let tl = gsap.timeline({ paused:true });
        tl
            .to(cardFrontRef.current, .7, { rotationY: 180 })
            .to(cardBackRef.current, .7, { rotationY: 0 }, 0)
            .to(cardWrapRef.current, .5, { z: 50 }, 0)
            .to(cardWrapRef.current, .5, { z: 0 }, .5);

        setAnimation(tl);

    }, [cardWrapRef.current]);

    return (
        <div ref={cardWrapRef} className="card-wrap relative" onMouseEnter={() => animation.play()} onMouseLeave={() => animation.reverse()}>
            <div className={`dialog-card border border-mercury flex flex-col justify-center card-back items-center p-15 bg-porcelain absolute w-full rounded`} ref={cardBackRef}>
                <div className="absolute overflow-hidden w-220 h-100 z-30 top-0 left-0">
                    <img src="/img/logo/card-back-top.svg" className="img-cover" />
                </div>
                <div className="absolute overflow-hidden w-220 h-100 z-30 bottom-0 right-0">
                    <img src="/img/logo/card-back-bottom.svg" className="img-cover" />
                </div>
                <div dangerouslySetInnerHTML={rawMarkup(answer)} className={`text-center text-codgray relative z-40`} />
            </div>

            <div className={`dialog-card border card-front border-mercury flex flex-col absolute justify-center items-center cursor-pointer p-15 bg-codgray w-full rounded`} ref={cardFrontRef}>
                <div className="absolute overflow-hidden w-220 h-100 z-30 top-0 left-0">
                    <img src="/img/logo/card-front-top.svg" className="img-cover" />
                </div>
                <div className="absolute overflow-hidden w-220 h-100 z-30 bottom-0 right-0">
                    <img src="/img/logo/card-front-bottom.svg" className="img-cover" />
                </div>
                <div dangerouslySetInnerHTML={rawMarkup(text)} className={`text-center text-white relative z-40`}  />
            </div>
        </div>
    );
};

export default DialogCard;