import { initialState } from "./initialState";
import produce from "immer/dist/immer";
import * as types from "./types";

const perfilReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PERFIL_REQUESTED:
        draft.loading = true;
        draft.perfil = [];
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_PERFIL_FINISHED:
        draft.loading = false;
        draft.perfil = action.perfil;
        draft.error = false;
        draft.errorMessage = "";
        break;
      case types.GET_PERFIL_ERROR:
        draft.loading = false;
        draft.perfil = [];
        draft.error = true;
        draft.errorMessage = action.msg;
        break;
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
    }
  });

export default perfilReducer;
