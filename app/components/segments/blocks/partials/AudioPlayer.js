import React from 'react';

import useAudio from './useAudio';
import AudioProgress from './AudioProgress';

const AudioPlayer = ({ header, src }) => {
    const { curTime, duration, playing, toggle, setClickedTime, setAudioRef} = useAudio(src);

    return (
        <div className="w-full h-130 border border-mercury flex">
            
            <div className="relative overflow-hidden hidden xs:block w-130">
                <img className="img-cover" src="/img/icons/icon-audio-hero.jpg" />
            </div>
            <div className="flex flex-col justify-center pl-25 pr-20 w-full xs:w-full-130">
                <h3 className="text-17 xxs:text-20 mb-8">{header}</h3>
                <div className="flex items-center">
                    <button onClick={toggle} className="flex-shrink-0">
                        {playing ? 
                                <img src="/img/icons/icon-pause.svg" className="mr-16 w-46 h-46" />
                            :
                                <img src="/img/icons/icon-play.svg" className="mr-16 w-46 h-46" />
                        }
                        <audio ref={c => setAudioRef(c)} />
                    </button>

                    <AudioProgress 
                        curTime={curTime} 
                        duration={duration} 
                        onTimeUpdate={(time) => setClickedTime(time)}
                    />
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;