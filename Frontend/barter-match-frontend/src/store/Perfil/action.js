import * as types from "./types";
import { checkStatus, parseJSON } from "../../utils/request";

const getPerfilRequested = () => {
  return {
    type: types.GET_PERFIL_REQUESTED,
  };
};

const getPerfilSucces = (perfil) => {
  return {
    type: types.GET_PERFIL_FINISHED,
    perfil,
  };
};

const getPerfilError = (msg) => {
  return {
    type: types.GET_PERFIL_ERROR,
    msg,
  };
};

export const getPublicaciones = (mail) => {
  return async (dispatch, getState) => {
    dispatch(getPerfilRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
          isHome: false,
          email: mail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      if (response_1.status === 200) {
        dispatch(getPerfilSucces(json.media_list));
      } else {
        dispatch(getPerfilError("Error"));
      }
    } catch (error) {
      //dispatch(getPublicacionesError("ERROR"));
    }
  };
};

/* GET MATCHS */

const getMatchsRequested = () => {
  return {
    type: types.GET_PERFIL_REQUESTED,
  };
};

const getMatchsSucces = (matchs) => {
  return {
    type: types.GET_PERFIL_FINISHED,
    matchs,
  };
};

const getMatchsError = (msg) => {
  return {
    type: types.GET_PERFIL_ERROR,
    msg,
  };
};

export const getMatchs = (mail) => {
  return async (dispatch, getState) => {
    dispatch(getMatchsRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/match/consult`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: mail,
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log("matchs", json.matchs);
        dispatch(getMatchsSucces(json.matchs));
    } catch (error) {
      //dispatch(getPublicacionesError("ERROR"));
    }
  };
};
