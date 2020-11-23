import React from "react";
import { fetchMultipleUsersData } from "../../utils/fetchMultipleUSers";
import { UserLayout } from "../Layout/UserLayout";

import "./UserPagination.style.css";

export const UserPagination = () => {
  const [userInfos, setUserInfos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetchMultipleUsersData(page).then((response) => {
      const newUserInfos = response.results;
      setUserInfos(newUserInfos);
    });
  }, [page]);

  return (
    <div className="userPagination__container">
      <p>
        Problem 5: Fetch and display multiple users from{" "}
        <a href="https://randomuser.me/api" target="__blank">
          https://randomuser.me/api
        </a>{" "}
        (including next/prev buttons)
      </p>
      <div className="userPagination__area">
        {userInfos.map((userInfo, idx) => (
          <UserLayout
            key={idx}
            userAvatar={userInfo.picture.thumbnail}
            userName={`${userInfo.name.first} ${userInfo.name.last}`}
          />
        ))}
      </div>
      <div className="userPagination__paginateBtn">
        <button
          className="userPagination__prevBtn"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          ◀ Prev
        </button>
        <button
          className="userPagination__nextBtn"
          disabled={page >= 5}
          onClick={() => setPage(page + 1)}
        >
          Next ▶️
        </button>
      </div>
    </div>
  );
};
