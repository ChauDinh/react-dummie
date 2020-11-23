import axios from "axios";

export const fetchMultipleUsersData = (page) => {
  return axios
    .get(`https://randomuser.me/api/?page=${page}&results=3`)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};
