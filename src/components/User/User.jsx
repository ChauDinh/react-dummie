import React from "react";
import { fetchRandomUserData } from "../../utils/fetchRandomUser";

import "./User.style.css";
import { UserLayout } from "../Layout/UserLayout";

export const User = () => {
  const [userName, setUserName] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  return (
    <div className="user__container">
      <p>
        Problem 3: Fetch and display user (avatar and username) information from{" "}
        <a target="__blank" href="https://randomuser.me/api">
          https://randomuser.me/api
        </a>
      </p>
      <button
        className="user__btn"
        onClick={async () => {
          const fetchedData = await fetchRandomUserData().then(
            (response) => JSON.parse(response).results[0]
          );
          const firstName = await fetchedData.name.first;
          const lastName = await fetchedData.name.last;
          const avatar = await fetchedData.picture.thumbnail;
          setUserAvatar(avatar);
          setUserName(`${firstName} ${lastName}`);
        }}
      >
        🤦‍♀️ Random User
      </button>
      {userName && userAvatar ? (
        <UserLayout userAvatar={userAvatar} userName={userName} />
      ) : (
        <div>No user fetched yet!</div>
      )}
    </div>
  );
};
