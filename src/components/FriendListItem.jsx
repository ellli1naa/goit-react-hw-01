import React from "react";
import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-list-item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="avatar"
        width="48"
      />
        <p className="name">{name}</p>
        <p className={`status-text ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
