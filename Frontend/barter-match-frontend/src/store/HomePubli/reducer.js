import { initialState } from "./initialState";
import produce from "immer/dist/immer";
import * as types from "./types";

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PUBLIS_REQUESTED:
        draft.loading = true;
        draft.publicaciones = [];
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_PUBLIS_FINISHED:
        draft.loading = false;
        draft.publicaciones = action.publicaciones;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_PUBLIS_ERROR:
        draft.loading = false;
        draft.publicaciones = [];
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
    }
  });

export default homeReducer;
