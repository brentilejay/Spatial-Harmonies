

import React, { useRef } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    const playMusic = () => {
        if (audioRef.current.paused) {
        audioRef.current.play();
        } else {
        audioRef.current.pause();
        }
    };

    return (
        <div>
        <button onClick={playMusic}>Play/Pause Music</button>
        <audio ref={audioRef}>
            <source src="../sounds/BackgroundMusic.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        </div>
    );
    };

export default BackgroundMusic;

