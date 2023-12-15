import React from 'react';

import { convertReadingTime } from '../../../../../utilities';

const AudioProgress = ({ curTime, duration, onTimeUpdate }) => {
    let audioLen = duration ? convertReadingTime(Math.floor(duration), true, false) : '';

    let curPercentage = (curTime / duration) * 100;

    let currentTime = '0:00';
    if (curTime) {
        currentTime = convertReadingTime(Math.floor(curTime), true, false);
    } 

    if (curTime == 0) {
        curPercentage = 0;
    }

    function calcClickedTime(e) {
        const clickPositionInPage = e.pageX;
        const audioWave = e.target;
        const waveStart = audioWave.getBoundingClientRect().left + window.scrollX;
        const waveWidth = audioWave.offsetWidth;
        const clickPositionInWave = clickPositionInPage - waveStart;
        const timePerPixel = duration / waveWidth;

        return timePerPixel * clickPositionInWave;
    }

    function handleTimeDrag(e) {
        onTimeUpdate(calcClickedTime(e));
    
        const updateTimeOnMove = eMove => {
            onTimeUpdate(calcClickedTime(eMove));
        };
    
        document.addEventListener("mousemove", updateTimeOnMove);
    
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });
    }

    return (
        <>
            <div className="mr-16 flex-shrink hidden xxs:block relative w-full h-34">
                <div className="h-full absolute z-20 overflow-hidden left-0 top-0 bottom-0" style={{ width: `${curPercentage}%` }}>
                    <img src="/img/icons/icon-blue-player.svg" className="absolute img-audio h-full left-0 top-0 bottom-0 max-w-none" />
                </div>
                <img src="/img/icons/icon-gray-player.svg" className="img-audio h-full absolute left-0 top-0 bottom-0 z-10 max-w-none" />
                <img src="/img/icons/icon-gray-player.svg" className="img-audio h-full absolute left-0 top-0 bottom-0 z-30 max-w-none opacity-0" onMouseDown={e => handleTimeDrag(e)} />
            </div>
                    
            <span className="text-13 text-mineshaft flex-shrink-0">{currentTime} / {audioLen}</span>
        </>
    )
}

export default AudioProgress;