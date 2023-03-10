import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
// import AlbumIcon from '@mui/icons-material/Album';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
const VideoFooter = ({ chennal, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h4>{chennal}</h4>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
