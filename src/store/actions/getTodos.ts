export default (payload: any) => {
  return {
    type: "GET_TODOS",
    payload: payload,
  };
};
