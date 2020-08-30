import { SET_USER_ID } from "../../consts";

const setUserId = (userId: string) => {
  return {
    type: SET_USER_ID,
    payload: {
      userId,
    },
  };
};

export default setUserId;
