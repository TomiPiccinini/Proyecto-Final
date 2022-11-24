import { initialState } from "./initialState";
import produce from "immer/dist/immer";
import * as types from "./types";

const chatsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_MATCHS_REQUESTED:
        draft.loading = true;
        draft.matchs = [];
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_MATCHS_FINISHED:
        draft.loading = false;
        draft.matchs = action.matchs;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_MATCHS_ERROR:
        draft.loading = false;
        draft.matchs = [];
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
      case types.SET_SELECTED_USER:
        draft.selectedUser = action.user;
        break;
      case types.RESTORE_SELECTED_USER:
        draft.selectedUser = null;
        break;
      case types.SET_MESSAGE_REQUESTED:
        break;
      case types.SET_MESSAGE_FINISHED:
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.SET_MESSAGE_ERROR:
        draft.loading = false;
        draft.matchs = [];
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
    }
  });

export default chatsReducer;
