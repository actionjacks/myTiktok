import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <FavoriteBorderIcon classNam="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__logo" src="cd.png" alt="" />
    </div>
  );
}

export default VideoFooter;
