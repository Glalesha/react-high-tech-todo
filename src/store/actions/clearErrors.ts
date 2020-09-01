import { CLEAR_ERRORS } from "../../consts";

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export default clearErrors;
