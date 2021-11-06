import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    location,
    user: { name },
  },
}) => {
  return (
    <div class="profile-top bg-primary p-2">
      <img class="round-img my-1" src="" alt="" />
      <h1 class="large">{name}</h1>
      <p>{location && <span>{location}</span>}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
