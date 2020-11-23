import React from "react";
import { fetchMultipleUsersData } from "../../utils/fetchMultipleUSers";
import { UserLayout } from "../Layout/UserLayout";

import "./Users.style.css";

export const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="users__container">
      <p>
        Problem 4: Fetch and display multiple users from{" "}
        <a target="__blank" href="https://randomuser.me/api">
          https://randomuser.me/api
        </a>{" "}
        (including fetch more button)
      </p>
      <div className="users__area">
        {users.map((user, idx) => (
          <UserLayout
            key={idx}
            userAvatar={user.picture.thumbnail}
            userName={`${user.name.first} ${user.name.last}`}
          />
        ))}
      </div>
      {isLoading ? <p className="users__loadingArea">Loading...</p> : ""}
      <button
        className="users__btn"
        onClick={async () => {
          setIsLoading(true);
          fetchMultipleUsersData(page)
            .then((response) => {
              const newUsers = [...users, ...response.results];
              setPage(page + 1);
              setUsers(newUsers);
              setIsLoading(false);
            })
            .catch((err) => console.error(err));
        }}
      >
        🦄 Fetch more user
      </button>
    </div>
  );
};
