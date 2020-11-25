// import db from "./firebase";
import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./component/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
    //for firebase
    // db.collection("videos").onSnapshot((snapshot) =>
    //   setVideos(snapshot.docs.map((doc) => doc.data()))
    // );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, message, shares }) => {
            return (
              <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                message={message}
                shares={shares}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
