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
        draft.newPubli = action.publicacion;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.POST_PUBLIS_ERROR:
        draft.loading = false;
        draft.newPubli = {};
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
      case types.DELETE_PUBLI_REQUESTED:
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.DELETE_PUBLI_FINISHED:
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.DELETE_PUBLI_ERROR:
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
    }
  });

export default homeReducer;
