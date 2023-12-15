import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Youtube from './Youtube';
import Timestamp from './Timestamp';
import { rawMarkup } from '../../../../utilities';

const EmbeddedYoutubeLayout = ({ entry, contents, embeddedYoutube }) => {
    const [youtubeUrl, setYoutubeUrl] = useState(embeddedYoutube.embedUrl);
    let tabFirstTabRef = useRef(null);
    let tabSecondTabRef = useRef(null);
    let contentFirstRef = useRef(null);
    let contentSecondRef = useRef(null);    
    let tabSliderRef = useRef(null);

    useEffect(() => {
        setYoutubeUrl(embeddedYoutube.embedUrl);
    }, [embeddedYoutube.embedUrl]);

    useEffect(() => {
        if (tabFirstTabRef.current) {
            let firstTabRect = tabFirstTabRef.current.getBoundingClientRect();
            gsap.set(tabSliderRef.current, { width: firstTabRect.width });
        }
    });

    function handleTabClick(tab) {
        let animation = gsap.timeline({ defaults: { duration: 0.5, ease: 'power4.out' }});
        let tabFirstRect = tabFirstTabRef.current.getBoundingClientRect();
        let tabSecondRect = tabSecondTabRef.current.getBoundingClientRect();

        switch(tab) {
            case 1:
                animation.to(tabSliderRef.current, { x: 0, width: tabFirstRect.width });
                gsap.to(contentSecondRef.current, { autoAlpha: 0, display: 'none' });
                gsap.to(contentFirstRef.current, { autoAlpha: 1, display: 'block' });
                break;
            case 2:
                animation.to(tabSliderRef.current, { x: tabFirstRect.width+35, width: tabSecondRect.width });
                gsap.to(contentFirstRef.current, { duration: 0.3, autoAlpha: 0, display: 'none' });
                gsap.to(contentSecondRef.current, { duration: 0.3, autoAlpha: 1, display: 'block' });
                break;
        } 
    }

    let timestamps = '';

    if (embeddedYoutube && embeddedYoutube.timestamps.length) {
        timestamps = embeddedYoutube.timestamps.map((timestamp, idx) => {        
            return (
                <Timestamp 
                    key={`ts${idx}`}
                    ts={timestamp}
                    setYoutubeUrl={setYoutubeUrl}
                    embedUrl={embeddedYoutube.embedUrl}
                />
            );
        });
    }

    return (
        <>
            <div className="w-full bg-porcelain py-35 mb-48">
                <div className="container video-wrap relative mx-auto">
                    <Youtube youtubeUrl={youtubeUrl} />
                </div>
            </div>
            <div className="container builder mx-auto px-15 sm:px-0">
                <h1 className="text-32 font-medium mb-40">{entry.title}</h1>

                { timestamps.length ?
                (
                    <>
                    <div className="tabs-block flex border-b-2 border-alto pb-16 relative">
                        <button className="text-16 mr-35" ref={tabFirstTabRef} onClick={() => handleTabClick(1)}>Written Transcript</button>
                        <button className="text-16" ref={tabSecondTabRef} onClick={() => handleTabClick(2)}>Video Timeline</button>
                        <div className="tab-slider border-b-2 border-codgray absolute left-0 -bottom-2" ref={tabSliderRef}></div>
                    </div>
                    <div className="content-block relative">
                        <div className="tab-content" ref={contentFirstRef}>
                            { entry.description ?
                                <div dangerouslySetInnerHTML={rawMarkup(entry.description)} className="desc"/>
                            : ''}
                            {contents.length > 1 ? contents : <>{contents}</>}
                        </div>
                        <div className="tab-content hidden opacity-0 invisible" ref={contentSecondRef}>
                            {timestamps}
                        </div>
                    </div>
                    </>
                )
                : (
                    <>
                    { entry.description ?
                        <div dangerouslySetInnerHTML={rawMarkup(entry.description)} className="desc"/>
                    : ''}
                    {contents.length > 1 ? contents : <>{contents}</>}
                    </>
                )
            }   
            </div>
        </>
    )
}

export default EmbeddedYoutubeLayout;