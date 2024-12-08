import { useState } from 'react'
import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="description">
        <img
          src={image}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stat-item">
          <span className="label">Followers</span>
          <span className="value">{stats.followers}</span>
        </li>
        <li className="stat-item">
          <span className="label">Views</span>
          <span className="value">{stats.views}</span>
        </li>
        <li className="stat-item">
          <span className="label">Likes</span>
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
