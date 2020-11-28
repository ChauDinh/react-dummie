export const fetchSessionFromDb = async (sessionUrl) => {
  const response = await fetch(sessionUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
