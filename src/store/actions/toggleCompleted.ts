const toggleCompleted = (payload: any) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload,
  };
};

export default toggleCompleted;
