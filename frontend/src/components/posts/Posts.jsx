import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import PostItem from "./PostItem";
import "./Posts.css";

const Post = ({ getPosts, post: { post, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <Fragment>
      <div className="posts">
        {/* {post.map((post) => (
          <PostItem key={post._id} post={post} />
        ))} */}
        <form>
          <label>
            Share something<br></br>
            <input type="text" name="name" className="textBox" />
          </label>
          <br></br>
          <input type="submit" className="btn" value="Post" />
        </form>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Post);
