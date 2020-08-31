import { Error as ErrorType } from "../types/index";
import {
  INVALID_CREDENTIAL,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  DEFAULT_MESSAGE,
  INTERNAL_ERROR,
  USER_NOT_FOUND,
  EMAIL_ALREADY_EXIST,
  SUMBIT_TYPE_NOT_CHOOSED,
} from "../consts";

export const getNewId = (arr: any) => {
  let idArr = arr.filter((item: any) => {
    return item.id !== undefined && item.id !== null && !isNaN(item.id);
  });

  idArr = idArr.map((item: any) => {
    return item.id;
  });

  if (!idArr.length) {
    return 0;
  }

  return Math.max(...idArr) + 1;
};

export const getErrorsText = (Errors: ErrorType[]) => {
  const ErrorsMessages: string[] = Errors.map((Error: ErrorType) => {
    let message;
    switch (Error.code) {
      case "auth/user-not-found":
        message = USER_NOT_FOUND;
        break;

      case "auth/wrong-password":
        message = USER_NOT_FOUND;
        break;
      case "auth/email-already-exists":
        message = EMAIL_ALREADY_EXIST;
        break;
      case "auth/email-already-exists":
        message = EMAIL_ALREADY_EXIST;
        break;
      case "auth/internal-error":
        message = INTERNAL_ERROR;
        break;
      case "auth/invalid-credential":
        message = INVALID_CREDENTIAL;
        break;
      case "auth/invalid-email":
        message = INVALID_EMAIL_FORMAT;
        break;
      case "auth/invalid-password":
        message = INVALID_PASSWORD_FORMAT;
        break;
      case "submit-type-not-choosed":
        message = SUMBIT_TYPE_NOT_CHOOSED;
        break;
      default:
        message = DEFAULT_MESSAGE;
        break;
    }

    return message;
  });

  return ErrorsMessages;
};
