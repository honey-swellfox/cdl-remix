import React, { useRef } from 'react';
import gsap from 'gsap';
import _find from 'lodash/find';

import Scene from './partials/Scene';

const ImageScenes = ({ content }) => {
    const { header, instructions, scenes: scenesData, id } = content;
    let data = Array.isArray(scenesData) ? scenesData : scenesData.data;
    let backgroundImage = Array.isArray(content.backgroundImage) && content.backgroundImage.length ? content.backgroundImage[0].url : '';
  
    let backgroundImageAltText = Array.isArray(content.backgroundImage) && content.backgroundImage.length ? content.backgroundImage[0].altText : '';

    let scenesRef = useRef([]);

    function toggleScene({ handle, parentHandle, show=true, hasImage=true}) {
        let currentScene = scenesRef.current[handle];
        let parentScene = scenesRef.current[parentHandle];

        gsap.set('.no-img-scene', { autoAlpha: 0, display: 'none' });

        let foundScene = _find(data,  { sceneHandle: handle } );
        // did not use useRef, there's already ref
        let txtScene = document.querySelector(`#txt-scene-${foundScene.id}`);

        if (show) {
            if (hasImage) {
                gsap.to(parentScene, { duration: 0.25, autoAlpha: 0, display: 'none', position: 'absolute' });
                gsap.to(currentScene, { duration: 0.3, autoAlpha: 1, display: 'flex', position: 'relative' });

                if (txtScene) {
                    gsap.set(txtScene, { autoAlpha: 1, display: 'flex' });
                }
            } else {
                gsap.to(currentScene, { autoAlpha: 1, display: 'flex', duration: 0.25 });
            }
        } else {
            if (hasImage) {
                gsap.to(parentScene, { duration: 0.3, autoAlpha: 1, display: 'flex', position: 'relative' });
                gsap.to(currentScene, { duration: 0.25, autoAlpha: 0, display: 'none', position: 'absolute' });

                if (txtScene) {
                    gsap.set(txtScene, { autoAlpha: 0, display: 'none' });
                }
            }
        }   
    }
    
    const firstScene = <Scene imgUrl={backgroundImage} imgAltText={backgroundImageAltText} sceneData={{ id }} data={data} isBaseScene={true} ref={sc => addRef('xbasex', sc)} toggleScene={toggleScene} />;

    let scenes = data.map(scene => {
        let imgUrl = Array.isArray(scene.sceneImage) && scene.sceneImage.length ? scene.sceneImage[0].url : '';
        let imgAltText = Array.isArray(scene.sceneImage) && scene.sceneImage.length ? scene.sceneImage[0].altText : '';

        return <Scene key={scene.id} imgUrl={imgUrl} imgAltText={imgAltText} sceneData={scene} data={data} isBaseScene={false} ref={sc => addRef(scene.sceneHandle, sc)} toggleScene={toggleScene} />
    });

    function addRef(handle, element) {
        scenesRef.current = {
            ...scenesRef.current,
            [handle]: element
        }
    }

    return (
        <div className="block-maps relative mb-90">
            <div className="flex justify-center items-center">
                <div className="flex-shrink-0 w-full lg:w-full+100">
                    {header ? <h2 className="header mb-20">{header}</h2> : ''}
                    {instructions ? <p className="instructions mb-10 text-15">{instructions}</p> : ''}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex relative justify-center w-full lg:w-full+100 flex-shrink-0 lg:h-450 border border-porcelain">
                    {firstScene}
                    {scenes}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-shrink-0 items-center h-50 w-full lg:w-full+100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" className="mr-7">
                        <g fill="none" fillRule="evenodd" stroke="#393939">
                            <path d="M6 5.5V3.375M8 5.5V3.875" transform="translate(1.5 1.5)"/>
                            <path strokeLinejoin="round" d="M2 7.5V1c0-.552.448-1 1-1h0c.552 0 1 .448 1 1v4.5m0 0V4c0-.552.448-1 1-1h0c.552 0 1 .448 1 1v1.5m0-1.25c0-.552.448-1 1-1h0c.552 0 1 .448 1 1V5.5" transform="translate(1.5 1.5)"/>
                            <path strokeLinejoin="round" d="M8 5c0-.552.448-1 1-1h0c.552 0 1 .448 1 1v3.522C10 10.44 8.418 12 6.5 12h-2c-.999 0-2.042-.396-2.609-1.181 0 0-1.891-2.09-1.891-3.319 0-.462.121-.878.408-1.25L2 4.5" transform="translate(1.5 1.5)"/>
                        </g>
                    </svg>
                    <span className="text-12">Hover &amp; click to explore</span>
                </div>
            </div>
        </div>
    );
}

export default ImageScenes;