import React, { useState } from "react";
import "./VideoSidebar.css";
import AdbIcon from "@material-ui/icons/Adb";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

function VideoSidebar({ likes, shares, message }) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="videoSidebar">
        <div className="videoSection__button">
          {liked ? (
            <AdbIcon fontSize="large" onClick={(e) => setLiked(false)} />
          ) : (
            <AirlineSeatReclineNormalIcon
              fontSize="large"
              onClick={(e) => setLiked(true)}
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="videoSection__button">
          <AirlineSeatReclineNormalIcon />
          <p>{shares}</p>
        </div>
        <div className="videoSection__button">
          <AllInclusiveIcon />
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

export default VideoSidebar;
