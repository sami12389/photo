import React from 'react'
import { urlFor } from '../lib/client'


const Video = ({videoData}) => {
  return (
    <div className = "videoContainer">
       {videoData.map((video)=>(
        <>
        <img className = "videoAsset" src = {urlFor(video.video)} alt = ""/>
        <div className = "videoText">
        <h1 className = "videoHeading">{video.videoHeading}</h1>
        <p className = "videoText">{video.videoText}</p>
        </div>
        </> 
       ))}
    </div>
  )
}

export default Video