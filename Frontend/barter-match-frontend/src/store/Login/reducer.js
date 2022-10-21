import { initialState } from "./initialState";
import produce from "immer/dist/immer";
import * as types from "./types";

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_MAIL:
        draft.mail = action.mail;
        break;
      case types.RESTORE_MAIL:
        draft.mail = "";
        break;
    }
  });

export default loginReducer;
