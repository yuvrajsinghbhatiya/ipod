import React, { useState ,useRef, useEffect } from 'react';
import './ActivePage.css';

import music1 from './assets/Ava - Famy.mp3';
import music2 from './assets/Birds - Imagine Dragons.mp3';
import music3 from './assets/Kedarnath - Pandavaas.mp3';
import music4 from './assets/Mood - 24kGoldn.mp3';
import music5 from './assets/Replay - Iyaz.mp3';
import music6 from './assets/Set Fire - Adele.mp3';


function ActivePage2(props) {
  const data=
    [
      {
        id: 1,
        title: 'Famy',
        artist: 'Ava Max',
        album: 'Heaven & Hell',
        duration: '3:56',
        image: 'https://i.scdn.co/image/ab67616d0000b2739e6afbff094dd614ec425845',
        url: music1,
      },
      {
        id: 2,
        title: 'Birds',
        artist: 'Imagine Dragons',
        album: 'Origins',
        duration: '3:38',
        image: 'https://i.scdn.co/image/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd',
        url: music2,
      },
      {
        id: 3,
        title: 'Pandavaas',
        artist: 'Kedarnath',
        album: 'Kedarnath',
        duration: '1:01',
        image: 'https://i.scdn.co/image/ab67616d0000b273ffbcb6e1a6007f2b28377076',
        url: music3,
      },
      {
        id: 4,
        title: 'Mood',
        artist: '24kGoldn',
        album: 'Mood',
        duration: '2:19',
        image: 'https://i.scdn.co/image/ab67616d0000b273ff8c985ecb3b7c5f847be357',
        url: music4,
      },
      {
        id: 5,
        title: 'Replay',
        artist: 'Iyaz',
        album: 'Replay',
        duration: '3:03',
        image: 'https://i.scdn.co/image/ab67616d0000b273ae7012fce99c2b2345b54f30',
        url: music5,
      },
      {
        id: 6,
        title: 'Set Fire',
        artist: 'Adele',
        album: '21',
        duration: '4:03',
        image: 'https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300',
        url: music6,
      },

      
  ]
  const { current } = props;
  const audioRef = useRef(null);
  const [inputValue, setInputValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleSlider = () => {
    const currentTime = parseInt(inputValue) / 100 * audioRef.current.duration;
    audioRef.current.currentTime = currentTime;
  };
  

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progress = Math.floor((currentTime / duration) * 100);
    setInputValue(progress);
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressStyle = {
    background: `linear-gradient(to right, blue, blue ${inputValue}%, #d3d3d3 ${inputValue}%, #d3d3d3)`
  };


  return (
    <div className='musicdiv'>
      <div className='music'>
        <div className='left'>
          <audio
            className='audio'
            ref={audioRef}
            src={data[current].url}
            controls
            autoPlay
            onTimeUpdate={handleTimeUpdate}
          ></audio>
        </div>
        <div className='right'>
          <div className='inside'>
            <img src={data[current].image} alt='music' />
            <div className='name'>
              <h4>{data[current].title}</h4>
              <p>{data[current].artist}</p>
            </div>
          </div>
          <div className='slider' >
            <div className='slider-progress'>
              <span className='dur'>{formatTime(audioRef.current?.currentTime)}</span>&nbsp;
              <input
                type='range'
                min='0'
                max='100'
                value={inputValue}
                step='1'
                onChange={(e) => setInputValue(parseInt(e.target.value))}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => {
                  setIsDragging(false);
                  handleSlider();
                }}
                style={progressStyle}
              />
              &nbsp;
              <span className='dur'>{data[current].duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivePage2;