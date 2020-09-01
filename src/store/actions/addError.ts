import { ADD_ERROR } from "../../consts";

const addError = (error: string) => {
  return {
    type: ADD_ERROR,
    payload: {
      error,
    },
  };
};

export default addError;
