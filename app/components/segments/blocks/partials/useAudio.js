import { useState, useEffect } from "react";

const useAudio = src => {
    const [duration, setDuration] = useState();
    const [curTime, setCurTime] = useState();
    const [playing, setPlaying] = useState(false);
    const [audioRef, setAudioRef] = useState(null);
    const [clickedTime, setClickedTime] = useState();  

    const toggle = () => {
        if (audioRef) {
            if (audioRef.src !== src) {
                audioRef.src = src;
            }
        
            if (!playing) {
                audioRef.play();
            } else {
                audioRef.pause();
            }
        }
    
        setPlaying(!playing);
    };

    const stopAudio = () => {
        if (audioRef) {
            audioRef.pause();
            setPlaying(false);
        }
    }

    useEffect(() => {
        if (audioRef) {
            audioRef.src = src;
            audioRef.load();
        }
            
    }, [audioRef, src]);


    useEffect(() => {
        let setAudioData;
        let setAudioTime;

        if (audioRef) {
            setAudioData = () => {
                setDuration(audioRef.duration);
                setCurTime(audioRef.currentTime);
            }

            setAudioTime = () => setCurTime(audioRef.currentTime);

            audioRef.addEventListener("loadeddata", setAudioData);
            audioRef.addEventListener("timeupdate", setAudioTime);

            if (Math.floor(audioRef.currentTime) == Math.floor(audioRef.duration)) {
                stopAudio();
                audioRef.currentTime = 0;
                setCurTime(0);
            }

            if (clickedTime && clickedTime !== curTime) {
                audioRef.currentTime = clickedTime;
                setClickedTime(null);
            } 
        }

        window.addEventListener('blur', stopAudio);

        return () => {
            if (audioRef) {
                audioRef.removeEventListener("loadeddata", setAudioData);
                audioRef.removeEventListener("timeupdate", setAudioTime);
                window.removeEventListener('blur', stopAudio);
            }
        }
    });

    return {
        curTime,
        duration,
        playing,
        toggle,
        setClickedTime,
        setAudioRef
    }
}

export default useAudio;