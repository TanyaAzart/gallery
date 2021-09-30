import React, { useState } from 'react';
import Video from './Video';
import myVideos from './videos';
import Liversion from './liversion.jpg';

 // VIDEO GALLERY

const Sound =() =>{

    const videos = myVideos;
    const videosFirst = videos.slice(0,6);
    const videosLast = videos.slice(6);
    const [currentVideo, setCurrentVideo] = useState(videos[8]);

    const onVideoClick = (video)=> {
        setCurrentVideo(video);
    }
       
    const renderedFirst = videosFirst.map(video=> {
        return(
            <div className='video-thumb' key={video.id} onClick={()=>onVideoClick(video)}>
                <img alt='' src={video.pic}/>
                <p>{video.title}</p>
            </div>
        )
    });
    
    const renderedLast = videosLast.map(video=> {
        return(
            <div className='video-thumb' key={video.id} onClick={()=>onVideoClick(video)}>
                <img alt='' src={video.pic}/>
                <p>{video.title}</p>
            </div>
        )
    });
    
    return (
            <div className='container'>
            <div className ='videos-list-left'>            
                {renderedFirst}                                                                     
            </div>
            
            <div className ='videos-list-right'>            
                {renderedLast}                                                                     
            </div>
            <div className='enlarged-video'>
                <Video url={currentVideo.url}/>
                <p>{currentVideo.descr}</p>
            </div>
        </div>              
    )
}

export default Sound;