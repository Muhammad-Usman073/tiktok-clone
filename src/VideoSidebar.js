import React, { useState } from "react";
import "./VideoSidebar.css";
import { Favorite } from "@mui/icons-material";
import { Message } from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>{shares} </p>
      </div>
    </div>
  );
};

export default VideoSidebar;
