export const GET_ROUTE = "GET_ROUTE";

export const getRoute = (key) => {
  return {
    type: GET_ROUTE,
    payload: key,
  };
};
