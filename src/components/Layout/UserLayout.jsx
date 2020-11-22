import React from "react";
import "./UserLayout.style.css";

export const UserLayout = ({ userAvatar, userName }) => {
  return (
    <div className="user__area">
      <img
        width="100px"
        height="100px"
        className="user__avatar"
        alt="avatar"
        src={userAvatar}
      />
      <div className="user__info">{userName}</div>
    </div>
  );
};
