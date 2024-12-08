import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};


export default FriendList;
