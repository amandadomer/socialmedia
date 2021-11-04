import React from "react";
import "./Posts.css";

function Post() {
  return (
    <div className="post">
      <form>
        <label>
          Share something<br></br>
          <input type="text" name="name" className="textBox" />
        </label>
        <br></br>
        <input type="submit" className="btn" value="Post" />
      </form>
    </div>
  );
}

export default Post;
