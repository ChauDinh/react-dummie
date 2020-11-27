export const fetchMultiplesUsersFromDb = async (dbUrl) => {
  const responses = await fetch(dbUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return responses.json();
};
