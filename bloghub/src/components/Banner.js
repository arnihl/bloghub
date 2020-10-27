import React from 'react';
import '../App.css';
import './Banner.css';

function Banner() {
    return (
        <div className='Banner-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Blog-hub container</h1>
        </div>
    )
}

export default Banner;
