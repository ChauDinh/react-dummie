import React from "react";

import { fetchRandomUserData } from "../../utils/fetchRandomUser";
import "./FetchRandomUser.style.css";

export const FetchRandomUser = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = React.useState("");
  return (
    <div className="fetch__container">
      <p>
        Problem 2: Fetch data from{" "}
        <a target="__blank" href="https://randomuser.me/api">
          https://randomuser.me/api
        </a>
      </p>
      <div className="fetch__area">
        <button
          className="fetch__btn"
          onClick={async () => {
            const data = await fetchRandomUserData();
            setRandomUserDataJSON(data);
          }}
        >
          Fetch New Data
        </button>
        {randomUserDataJSON ? (
          <pre className="fetch__result">{randomUserDataJSON}</pre>
        ) : (
          "No user fetched yet!"
        )}
      </div>
    </div>
  );
};
