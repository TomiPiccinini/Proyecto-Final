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
      case types.POST_PUBLIS_REQUESTED:
        draft.loading = true;
        draft.newPubli = {};
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.POST_PUBLIS_FINISHED:
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.POST_PUBLIS_ERROR:
        draft.loading = false;
        draft.newPubli = {};
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
      case types.LIKE_PUBLI_REQUESTED:
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = "";
        draft.showMatch = false;
        draft.imageMatch = "";
        break;
      case types.LIKE_PUBLI_FINISHED:
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = "";
        draft.showMatch = true;
        draft.imageMatch = action.foto;
        break;
      case types.CLOSE_LIKE_PUBLI:
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = "";
        draft.showMatch = false;
        draft.imageMatch = "";
        break;
      case types.LIKE_PUBLI_ERROR:
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.msg;
        draft.showMatch = false;
        break;
    }
  });

export default homeReducer;
