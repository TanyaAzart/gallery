import React, { useState } from 'react';
import Video from './Video';
import myVideos from './videos';

 // VIDEO GALLERY

const Sound =() =>{

    const videos = myVideos;
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    const onVideoClick = (video)=> {
        setCurrentVideo(video);
    }
       
    const renderedVideos = videos.map(video=> {
        return(
            <div className='video-thumb' key={video.id} onClick={()=>onVideoClick(video)}>
                <img alt='' src={video.pic}/>
                <span>{video.title}</span>
            </div>
        )
    });

    
    return (
        <div className='container'>
            <div className ='videos-list'>            
                {renderedVideos}                                                                     
            </div>
            <div className='enlarged-video'>
                <Video url={currentVideo.url}/>
                <div>{currentVideo.descr}</div>
            </div>
        </div>        
    )
}

export default Sound;