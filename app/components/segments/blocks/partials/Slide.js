import React, { forwardRef } from 'react';

import { rawMarkup } from '../../../../../utilities';

const Slide = forwardRef(({ slide, handleSlide, contentId }, ref) => {
    const {  text, slideType } = slide;
    let slideImage = Array.isArray(slide.slideImage) && slide.slideImage.length ? slide.slideImage[0].url : '';
    let slideImageAltText = Array.isArray(slide.slideImage) && slide.slideImage.length ? slide.slideImage[0].altText ?  slide.slideImage[0].altText : '' : '';

    let content = text ? <div dangerouslySetInnerHTML={rawMarkup(text)} className={slideImage ? 'w-full sm:w-2/3' : 'w-full'} /> : '';

    switch (slideType) {
        case 'imageText':
            content = (
                <div className="flex flex-shrink-0 items-center justify-center flex-wrap w-full">
                    <div className="w-full sm:w-1/3 h-200 sm:h-350 relative overflow-hidden mb-20 sm:mb-0"><img src={slideImage} className="img-cover" alt={slideImageAltText} /></div>
                    { text ? 
                    <div dangerouslySetInnerHTML={rawMarkup(text)} className={`slide-text pl-20 pr-35 sm:pr-20 w-full sm:w-2/3 mb-20 sm:mb-0`} />
                    : '' }
                </div>
            );
            break;
        case 'iconText':
            content = (
                <div className="flex flex-shrink-0 items-center justify-center flex-wrap w-full">
                    <div className="w-full sm:w-1/3 h-200 sm:h-350 relative overflow-hidden mb-20 sm:mb-0 flex items-center bg-porcelain justify-center">
                        <img src="/img/icons/icon-treadprints.svg" className="w-full" />
                        {slideImage ? <img src={slideImage} className="w-100 absolute" alt={slideImageAltText} /> : ''}
                    </div>
                    { text ? 
                    <div dangerouslySetInnerHTML={rawMarkup(text)} className={`slide-text pl-20 pr-35 sm:pr-20 w-full sm:w-2/3 mb-20 sm:mb-0`} />
                    : '' }
                </div>
            );
            break;

        case 'imageOnly':
            content = (
                <div className="flex items-center justify-center w-full">
                    <div className="overflow-hidden relative w-full sm:h-350"><img src={slideImage} className="w-full h-full sm:img-cover" alt={slideImageAltText} /></div>
                </div>
            );
            break;
            
        case 'introSlide':
            content = (
                <div className="flex intro-slide items-center justify-center w-full">
                    <div className="overflow-hidden relative w-full sm:h-350 flex flex-col justify-center items-center sm:items-start bg-woodsmoke">
                        <img src="/img/backgrounds/bg-introslide.jpg" className="bg w-full h-full img-cover hidden sm:block" alt="Intro slide image" />
                        <div className="pl-20 md:pl-30 lg:pl-48">
                            <div dangerouslySetInnerHTML={rawMarkup(text)} className="relative mb-45 sm:mb-38" />
                            <button id={`btn-intro-${contentId}`} className="bg-blueribbon text-white w-150 h-48 text-14 pl-16 pr-20 text-center hover:bg-blueribbon-80 flex items-center relative z-40" onClick={() => handleSlide('right', true)}>
                                <span className="flex-shrink-0 mr-40">Let's Go</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" className="fill-current flex-shrink-0">
                                    <path fillRule="evenodd" d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
            break;

        case 'textOnly':
        default:
            content = text ? <div dangerouslySetInnerHTML={rawMarkup(text)} className="slide-text w-full pl-20 pr-35 sm:pr-20" /> : '';
            break;
    }

    return (
        <section className={`slide relative w-full h-full lg:w-800 sm:h-350 float-left flex flex-shrink-0 items-center justify-center bg-white ${slideType == 'textOnly' || !slideType  ? 'self-center' : '' }`} ref={ref}>
            {content}
        </section>
    );
});

export default Slide;