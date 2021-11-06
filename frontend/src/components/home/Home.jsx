import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.css";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
import HomeActions from "./HomeActions";

const Home = ({
  getProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getProfile();
  }, []);

  return loading && profile === null ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <h1> Home </h1>
      <p>
        <i className="fas fa-user"> Welcome {user && user.name}</i>
      </p>
      {profile !== null ? (
        <Fragment>
          <HomeActions />
        </Fragment>
      ) : (
        <Fragment>
          <p> You haven't created a profile yet. Click here to add info</p>
          <Link to="/create-profile" className="btn btn-primary">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
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

export default connect(mapStateToProps, { getProfile })(Home);
