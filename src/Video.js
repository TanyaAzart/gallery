import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url })=>{

    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url = {url}
            controls = {true}
            />
        </div>
    )
}

export default Video;