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
          email: "alva@gmail.com",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log("publis:", json);
      if (response_1.status === 200) {
        dispatch(getPerfilSucces(json.media_list));
      } else {
        dispatch(getPerfilError("Error"));
      }
    } catch (error) {
      console.log(error);
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

const getMatchsSucces = (perfil) => {
  return {
    type: types.GET_PERFIL_FINISHED,
    perfil,
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
        body: "franco12@gmail.com",
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log("matchs", json);
      /*if (response_1.status === 200) {
        dispatch(getMatchsSucces(json.media_list));
      } else {
        dispatch(getMatchsError("Error"));
      }*/
    } catch (error) {
      console.log(error);
      //dispatch(getPublicacionesError("ERROR"));
    }
  };
};
