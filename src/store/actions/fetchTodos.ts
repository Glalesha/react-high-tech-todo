const fetchTodos = (userId: number) => {
  return {
    type: "FETCH_TODOS",
    payload: {
      userId,
    },
  };
};

export default fetchTodos;
