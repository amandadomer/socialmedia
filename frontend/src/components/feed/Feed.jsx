import React from "react";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      Your Friend's Name<br></br>
      this is my photo of a mountain
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1635067907927-308f0ce72607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2064&q=80"
      ></img>
      <span className="postDate">an hour ago</span>
      <br></br>
      <span className="postLikeCount">
        like<br></br>
        10 people like this
      </span>
    </div>
  );
}

export default Feed;
