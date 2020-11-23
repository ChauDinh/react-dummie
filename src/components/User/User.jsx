import React from "react";
import { fetchRandomUserData } from "../../utils/fetchRandomUser";

import "./User.style.css";
import { UserLayout } from "../Layout/UserLayout";

export const User = () => {
  const [userName, setUserName] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

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
          setIsLoading(true);
          const fetchedData = await fetchRandomUserData()
            .then((response) => JSON.parse(response).results[0])
            .catch(() => setIsError(true));
          const firstName = await fetchedData.name.first;
          const lastName = await fetchedData.name.last;
          const avatar = await fetchedData.picture.thumbnail;
          setUserAvatar(avatar);
          setUserName(`${firstName} ${lastName}`);
          setIsLoading(false);
        }}
      >
        🤦‍♀️ Random User
      </button>
      {isError && <p>Oops! Something went wrong...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : userName && userAvatar ? (
        <UserLayout userAvatar={userAvatar} userName={userName} />
      ) : (
        <div>No user fetched yet!</div>
      )}
    </div>
  );
};
