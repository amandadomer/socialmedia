import React from "react";
import NavBar from "../navBar/NavBar";
import Post from "../posts/Posts";
import Feed from "../feed/Feed";
import RightBar from "../rightBar/RightBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Post />
            <Feed />
          </div>
          <div className="col-4">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
