import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDOES_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async()=>{
        // TODO: Fetch videos from Youtube API
        const data = await fetch(YOUTUBE_VIDOES_API)
        const json = await data.json()
        // console.log(json.items)
        setVideos(json.items)
    }
    return (
        <div className='flex flex-wrap'>
            {videos[0] && <AdVideoCard info={videos[0]}/>}
            {/* TODO: Map over the videos array and render VideoCard component */}
            {videos.map((video) =>
                <Link key = {video.id} to= {"/watch?v=" + video.id}>
                    <VideoCard info={video}/>
                </Link>
            )}
            
        </div>
    )
}

export default VideoContainer