import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NavBar from "../navBar/NavBar";
import Post from "../posts/Posts";
import Feed from "../feed/Feed";
import RightBar from "../rightBar/RightBar";
import "./Home.css";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";

const Home = ({ getProfile, auth, profile }) => {
  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <div>
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
};

Home.propTypes = {
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default Home;
