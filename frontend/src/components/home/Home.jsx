import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.css";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
import HomeActions from "./HomeActions";
import Spinner from "../spinner/Spinner";

const Home = ({
  getProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Home</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <HomeActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
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
