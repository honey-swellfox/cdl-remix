import React, { useState, useEffect, useRef } from 'react';
import _debounce from 'lodash/debounce';

import SpotLinks from './partials/SpotLinks';
import { recalculateCoords, rawMarkup } from '../../../../utilities';

const ImageHotspots = ({ content }) => {
    const { header, instructions, imageMap, spots: spotsData } = content;
    const [isLoaded, setIsLoaded] = useState(false);    

    let data = Array.isArray(spotsData) ? spotsData : spotsData.data;
    let backgroundImage = Array.isArray(content.backgroundImage) ? content.backgroundImage[0] ? content.backgroundImage[0].url : '' : content.backgroundImage.url;

    let backgroundImageAltText = Array.isArray(content.backgroundImage) ? content.backgroundImage[0] ? content.backgroundImage[0].altText : '' : content.backgroundImage.altText;

    const [spots, setSpots] = useState(data);
    const imageRef = useRef();
    let captionRef = useRef();

    let firstSpot = spots[0];
    const [areaContent, setAreaContent] = useState({ spot: firstSpot, num: 1 });
    const [selectedSpot, setSelectedSpot] = useState(firstSpot);

    useEffect(() => {
        const image = imageRef.current;

        if (image && image.complete) {
            handleImageLoaded();
        }

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    }, []);

    const debouncedHandleResize = _debounce(function() {
        setSpots(recalculateCoords(imageRef.current, data, 500, 281));
    }, 500);

    function handleImageLoaded() {
        if (!isLoaded) {
            setIsLoaded(true);
            debouncedHandleResize();
        }
    }

    function handleClickSpot(spotData) {
        setAreaContent(spotData);
        setSelectedSpot(spotData.spot);
    }

    return (
        <div className="block-spots mb-40">
            <div className="flex justify-center items-center">
                <div className="flex-shrink-0 w-full lg:w-full+100">
                    {header ? <h2 className="header mb-20">{header}</h2> : ''}
                    {instructions ? <p className="instructions mb-10 text-15">{instructions}</p> : ''}
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex relative justify-center w-full lg:w-full+100 flex-shrink-0 flex-wrap">
                    <div className="relative overflow-hidden flex justify-center w-full lg:w-5/8 lg:h-281 border-l border-t border-b border-porcelain">
                        <img src={backgroundImage} useMap={`#${imageMap}`} ref={imageRef} onLoad={handleImageLoaded} className="h-full w-full border-0 z-30 relative" alt={backgroundImageAltText} />
                        <SpotLinks spots={spots} selectedSpot={selectedSpot} handleClickSpot={handleClickSpot}/>
                    </div>
                    <div className="spot-text w-full lg:w-3/8 bg-porcelain p-15 sm:p-30 overflow-y-auto lg:max-h-281 lg:h-281" ref={captionRef}>
                        { areaContent.spot && areaContent.spot.areaName ?
                            <h3 className="text-14 font-medium mb-16">{areaContent.num}. {areaContent.spot.areaName}</h3>
                        : '' }
                        { areaContent.spot ? 
                        <div dangerouslySetInnerHTML={rawMarkup(areaContent.spot.spotContent, (areaContent.spot.areaName ? '' : `${areaContent.num}. `))} className="text-13" />
                        : '' }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageHotspots;