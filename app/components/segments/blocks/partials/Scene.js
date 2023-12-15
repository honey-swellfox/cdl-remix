import React, { useState, useRef, useEffect, forwardRef } from 'react';
import _debounce from 'lodash/debounce';

import SceneLinks from './SceneLinks';
import { recalculateCoords } from '../../../../../utilities';

const Scene = forwardRef(({ imgUrl, imgAltText, data, sceneData, isBaseScene, toggleScene }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [links, setLinks] = useState([]);

    const imageRef = useRef();

    useEffect(() => {
        const image = imageRef.current;

        if (image && image.complete) {
            handleImageLoaded();
        }

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    });

    function handleImageLoaded() {
        if (!isLoaded) {
            setIsLoaded(true);
            debouncedHandleResize();
        }
    }

    let scenes = [];
    let sceneZIdx = 'z-10';
    let btnZIdx = 'z-20';

    switch(sceneData.sceneLevel) {
        case '1':
            sceneZIdx = 'z-20';
            btnZIdx = 'z-30';
            break;
        case '2': 
            sceneZIdx = 'z-30';
            btnZIdx = 'z-40';
            break;
        case '3': 
            sceneZIdx = 'z-40';
            btnZIdx = 'z-50';
            break;
    }

    if (isBaseScene) {
        scenes = data.filter(scene => {
            return Number(scene.sceneLevel) == 1;
        });
    } else {
        scenes = data.filter(scene => {
            return Number(sceneData.sceneLevel)+1 == Number(scene.sceneLevel) && sceneData.sceneHandle == scene.parentHandle;
        });
    }

    const debouncedHandleResize = _debounce(function() {
        setLinks(recalculateCoords(imageRef.current, scenes, 800, 450));
    }, 500);

    return (
        imgUrl ?
        (
            <>
        <div className={`${isBaseScene ? '' : 'absolute flex-shrink-0 opacity-0 invisible'} overflow-hidden flex justify-center w-full h-full`} ref={ref}>
            { !isBaseScene ?
            (<div className={`absolute ${btnZIdx} top-10 left-10 sm:top-20 sm:left-20`}>
                <button className="bg-mineshaft hover:bg-codgray text-white py-5 px-5 sm:px-16 text-12 sm:text-14 flex items-center justify-center font-light" onClick={() => toggleScene({ handle: sceneData.sceneHandle, parentHandle: sceneData.parentHandle ? sceneData.parentHandle : 'xbasex', show: false })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" className="mr-6">
                        <path fill="none" fillRule="evenodd" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L4.8 4.8 9.6 0" transform="rotate(90 2.5 4)"/>
                    </svg>
                    <span>Back</span>
                </button>
            </div>) : ''}

            <img src={imgUrl} alt={imgAltText} ref={imageRef} onLoad={handleImageLoaded} className={`h-full w-full border-0 ${sceneZIdx} relative`} />
            <SceneLinks 
                links={links} 
                toggleScene={toggleScene} 
                sceneZIdx={sceneZIdx} />
        </div>
        {!scenes.length && sceneData.sceneTitle ?
            <div id={`txt-scene-${sceneData.id}`} className={`opacity-0 invisible hidden absolute text-left w-full ${sceneZIdx} p-10 -bottom-50 text-12 sm:text-14 h-50 px-20 bg-blueribbon text-white items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-12 flex-shrink-0">
                    <path fill="#fff" d="M0 .425V1.84h11.322V.425H0zm0 3.538v1.415h16.276V3.963H0zM0 7.5v1.415h16.274V7.501H0z"/>
                </svg>
                <span>{sceneData.sceneTitle}</span>
            </div> : ''}
        </>
        )
        :
        (
            <div className={`no-img-scene h-50 absolute text-left w-full ${sceneZIdx} px-20 bg-blueribbon text-white -bottom-50 text-12 sm:text-14 opacity-0 invisible hidden items-center`} ref={ref}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-12 flex-shrink-0">
                    <path fill="#fff" d="M0 .425V1.84h11.322V.425H0zm0 3.538v1.415h16.276V3.963H0zM0 7.5v1.415h16.274V7.501H0z"/>
                </svg>
                <span>{sceneData.sceneTitle}</span>
            </div>
        ) 
    );
});

export default Scene;