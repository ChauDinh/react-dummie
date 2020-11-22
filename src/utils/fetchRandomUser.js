import axios from "axios";

export const fetchRandomUserData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then((response) => {
      // handle success
      return JSON.stringify(response.data, null, 2);
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
};
