export const fetchMultiplesUsersFromDb = async (dbUrl) => {
  const responses = await fetch(dbUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return responses.json();
};

export const fetchSingleUserFromDb = async (dbUrl) => {
  const response = await fetch(dbUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
