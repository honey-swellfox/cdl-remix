import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import _debounce from 'lodash/debounce';

import Slide from './partials/Slide';

const Slides = ({ content }) => {
    const { header, lessonSlides: slidesData } = content;
    const [offsets, setOffsets] = useState([]);

    let panelWrapRef = useRef();
    let slidesRef = useRef([]);
    let slidesWrapRef = useRef();
    let slidesInnerWrapRef = useRef();
    let countersRef = useRef([]);
    let activeSlideRef = useRef(0);
    let btnWrapRef = useRef();
    let btnLeftRef = useRef();
    let btnRightRef = useRef();
    
    let dragSlide;
    let data = Array.isArray(slidesData) ? slidesData : slidesData.data;

    const counterAnim = gsap.timeline({ paused: true });
    setTween(counterAnim);

    let isFirstSlideIntro = data[0].slideType == 'introSlide' ? true : false;

    if (slidesWrapRef.current) {
        gsap.set(slidesWrapRef.current, { opacity: 1 });

        for (let i=0; i<countersRef.current.length; i++) {
            gsap.set(countersRef.current[i], { y: 30 });
        }
    }

    if (panelWrapRef.current) {
        dragSlide = Draggable.create(panelWrapRef.current, {
            type: "x",
            edgeResistance: 1,
            snap: offsets,
            inertia: true,
            bounds: slidesInnerWrapRef.current,
            onDrag: tweenCounters,
            onThrowUpdate: tweenCounters,
            onThrowComplete: handleSlide,
            allowNativeTouchScrolling: false,
            zIndexBoost: false,
            // dragClickables issue fix
            onClick: function (e) {
                if (e.target.id == `btn-intro-${content.id}` || e.target.parentNode.id == `btn-intro-${content.id}`) {
                    handleSlide('right');
                }
            }
        });

        dragSlide[0].id = `panel-wrap-${content.id}`;
    }

    useEffect(() => {
        recalculateOffsets();
        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    }, []);

    function setTween(counterAnim) {
        counterAnim.to(
            countersRef.current,
            data.length + 1,
            { y: -(data.length * 30), rotation: 0.01, ease: "none" }
        );
    }

    useEffect(() => {
        counterAnim.time(1);
    }, [counterAnim]);

    function tweenCounters() {
        // 2nd value is the width of the slide
        let w = Math.abs(offsets[1]);
        let t = Math.abs(gsap.getProperty(panelWrapRef.current, "x") / w) + 1;

        gsap.set(counterAnim, {
            time: t
        });

        // console.log('t', t)

        if (isFirstSlideIntro && t < 2) {
            gsap.set(btnWrapRef.current, { autoAlpha: 0 });
            if (slidesInnerWrapRef.current) {
                slidesInnerWrapRef.current.classList.add('bg-woodsmoke');
            }  
            if (window.innerWidth < 640 && panelWrapRef.current) {
                panelWrapRef.current.classList.add('items-center');
                panelWrapRef.current.classList.remove('items-start');
            }  
        } else {
            if (data.length > 1) {
                gsap.set(btnWrapRef.current, { autoAlpha: 1 });
            }
            if (slidesInnerWrapRef.current && isFirstSlideIntro) {
                slidesInnerWrapRef.current.classList.remove('bg-woodsmoke');
            }
            if (window.innerWidth < 640 && panelWrapRef.current) {
                panelWrapRef.current.classList.remove('items-center');
                panelWrapRef.current.classList.add('items-start');
            }  
        }

        if (window.innerWidth > 639) {
            if (t < 2) {
                if (btnLeftRef.current) {
                    btnLeftRef.current.classList.add('cursor-not-allowed');
                    btnLeftRef.current.classList.add('opacity-50');
                    btnLeftRef.current.disabled = true;
                }
            } else {
                if (btnLeftRef.current) {
                    btnLeftRef.current.classList.remove('cursor-not-allowed');
                    btnLeftRef.current.classList.remove('opacity-50');
                    btnLeftRef.current.disabled = false;
                }
            }

            if (t >= data.length) {
                if (btnRightRef.current) {
                    btnRightRef.current.classList.add('cursor-not-allowed');
                    btnRightRef.current.classList.add('opacity-50');
                    btnRightRef.current.disabled = true;
                }
            } else {
                if (btnRightRef.current) {
                    btnRightRef.current.classList.remove('cursor-not-allowed');
                    btnRightRef.current.classList.remove('opacity-50');
                    btnRightRef.current.disabled = false;
                }
            }
        }
    }

    if (typeof window !== "undefined") {
        // gsap.defaults({
        //     overwrite: "auto"
        // });

        gsap.registerPlugin(Draggable, InertiaPlugin);
    }

    function recalculateOffsets() {
        if (panelWrapRef.current) { 
            let iw = window.innerWidth;
            let slideW = iw - 30;

            if (iw > 639 && iw < 768) {
                slideW = 640;
            }

            if (iw > 767 && iw < 1024) {
                slideW = 700;
            }

            if (iw > 1024) {
                slideW = 800;
            }

            gsap.set(panelWrapRef.current, { width: slideW * slidesRef.current.length });
        }

        let leftOffsets = [];

        if (slidesRef.current) {
            for (let i = 0; i < slidesRef.current.length; i++) {
                leftOffsets.push(slidesRef.current[i].offsetLeft === 0 ? 0 : -slidesRef.current[i].offsetLeft);
            }

            setOffsets(leftOffsets);
            activeSlideRef.current = 0;
            gsap.set(panelWrapRef.current, { x: leftOffsets[0] });

            if (dragSlide) {
                dragSlide[0].vars.snap = leftOffsets;
            }
        }
    }

    const debouncedHandleResize = _debounce(() => {
        recalculateOffsets();
    }, 500);

    function handleSlide(pos, isFirst=false) {
        let actSlide = activeSlideRef.current;

        if (isFirst) {
            actSlide = 0;
        }
    
        // swipe
        if (this && this.id === `panel-wrap-${content.id}`) {
            actSlide = offsets.indexOf(this.endX);
            // console.log(actSlide, this.endX)
        } else {
            if (gsap.isTweening(panelWrapRef.current)) {
                return;
            }

            // arrow clicks
            if ((pos == 'left') || (pos == 'right')) {
                if (pos == 'left') {
                    actSlide -= 1;
                }
    
                if (pos == 'right') {
                    actSlide += 1;
                }
            }
            // scrollwheel
            //  else {
                // actSlide = e.deltaY > 0 ? (actSlide += 1) : (actSlide -= 1);
            // }
        }

        actSlide = actSlide < 0 ? 0 : actSlide;
        actSlide = actSlide > slidesRef.current.length - 1 ? slidesRef.current.length - 1 : actSlide;

        activeSlideRef.current = actSlide;

        if (!this || (this.id != `panel-wrap-${content.id}`)) {
            gsap.to(panelWrapRef.current, { duration: 0.5, x: offsets[actSlide], onUpdate: tweenCounters});
        } 
    }

    let slides = data.map((slide, idx) => {
        return (
            <Slide key={slide.id} slide={slide} ref={ sl => slidesRef.current[idx] = sl } handleSlide={handleSlide} contentId={content.id} />
        );
    });

    let counters = data.map((slide, idx) => {
        return (
            <p key={slide.id} className="counter uppercase text-12 text-mineshaft-60 h-30" ref={cnt => countersRef.current[idx] = cnt}>Slide {idx+1} of {data.length}</p>
        );
    });
    
    // console.log('slides')
    return (
        <div className="block-slides relative mb-80"> 
            <div className="flex justify-center items-center">
                <div className="flex-shrink-0 w-full lg:w-full+100">
                    {header ? <h2 className="header mb-20">{header}</h2> : ''}
                    {data.length > 1 ? (
                        <>
                        <p className="hidden sm:block instructions mb-10 text-15">Click or swipe through all slides to learn more</p>
                        <p className="block sm:hidden instructions mb-10 text-15">Swipe left or right to change slides</p>
                        </>
                    ) : ''}
                </div>
            </div>
            <div className="slides-wrap outer flex justify-center items-center sm:h-350 relative opacity-0" ref={slidesWrapRef}>
                <div className={`overflow-hidden relative sm:absolute w-full lg:w-full+100 sm:h-350 border border-mercury ${isFirstSlideIntro ? 'bg-woodsmoke' : ''} `} ref={slidesInnerWrapRef}>
                    <div className={`absolute right-0 top-0 z-40 hidden ${data.length > 1 ? 'sm:flex' : ''} ${isFirstSlideIntro ? 'sm:opacity-0 sm:invisible' : ''}`} ref={btnWrapRef}>
                        <button className={`arrow w-50 h-50 flex items-center justify-center group bg-porcelain mr-2 hover:bg-blueribbon cursor-not-allowed opacity-50`} onClick={() => handleSlide('left')} ref={btnLeftRef}>
                            <svg width="8" height="14" viewBox="0 0 8 14" className="group-hover:hidden">
                                <path fill="none" fillRule="evenodd" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L6 6 12 0" transform="rotate(90 3 4)" />
                            </svg>
                            <svg width="8" height="14" viewBox="0 0 8 14" className={`hidden group-hover:block`}>
                                <path fill="none" fillRule="evenodd" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L6 6 12 0" transform="rotate(90 3 4)" />
                            </svg>
                        </button>
                        <button className={`arrow w-50 h-50 flex items-center justify-center group bg-porcelain hover:text-white hover:bg-blueribbon`} onClick={() => handleSlide('right')} ref={btnRightRef}>
                            <svg width="15" height="14" viewBox="0 0 8 14" className={`group-hover:hidden`}>
                                <path fill="none" fillRule="evenodd" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L6 6 12 0" transform="rotate(270 7 6)" />
                            </svg>
                            <svg width="15" height="14" viewBox="0 0 8 14" className={`hidden group-hover:block`}>
                                <path fill="none" fillRule="evenodd" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L6 6 12 0" transform="rotate(270 7 6)" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className={`flex-shrink-0 h-full slides-wrap flex items-center`} ref={panelWrapRef}>
                        {slides}
                    </div>
                </div>    
            </div>

            <div className={`${data.length > 1 ? 'flex' : 'hidden'} justify-center w-full relative -bottom-20 h-30 z-40 overflow-y-hidden`}>
                <div>
                    {counters}
                </div>
            </div>
        </div>
    );
}

export default Slides;