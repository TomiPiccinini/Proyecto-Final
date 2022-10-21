import * as types from "./types";

export const setMail = (mail) => {
  return {
    type: types.SET_MAIL,
    mail
  };
};

export const restoreMail = () => {
  return {
    type: types.RESTORE_MAIL
  };
};
