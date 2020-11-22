import React from "react";
import { fetchMultipleUsersData } from "../../utils/fetchMultipleUSers";
import { UserLayout } from "../Layout/UserLayout";

import "./Users.style.css";

export const Users = () => {
  const [users, setUsers] = React.useState([]);
  return (
    <div className="users__container">
      <p>
        Problem 4: Fetch and display multiple users from{" "}
        <a target="__blank" href="https://randomuser.me/api">
          https://randomuser.me/api
        </a>
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
      <button
        className="users__btn"
        onClick={async () => {
          const newUsersData = await fetchMultipleUsersData();
          const newUsers = [...users, ...newUsersData.results];
          setUsers(newUsers);
        }}
      >
        🦄 Fetch more user
      </button>
    </div>
  );
};
