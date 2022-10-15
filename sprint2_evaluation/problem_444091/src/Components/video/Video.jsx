import { useRef, useState } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const ref = useRef()
  const playVideo=()=>{
    //TODO
   ref.current.play()
  }
  const pauseVideo=()=>{
    ref.current.pause()
  }
  const skipVideo=()=>{
    const time = ref.current.currentTime;
            ref.current.currentTime = time + 30;
  }

 
 
  return (
    <div>
      <video data-testid="video-container" width="400" ref={ref} controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button action={playVideo}>
          PLAY
        </Button>
        <Button action={pauseVideo}>
          PAUSE
        </Button>
        <Button action={skipVideo}>
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
