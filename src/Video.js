import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({url,chennal,description,song,likes,shares,messages}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const handleVideoPress = () => {
    //if video is playing stop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //otherwise play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        loop
        className="video__player"
        src={url}
      ></video>
      <VideoFooter
        chennal={chennal}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
