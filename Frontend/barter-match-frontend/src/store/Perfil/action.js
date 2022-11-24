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
    type: types.GET_MATCHS_REQUESTED,
  };
};

const getMatchsSucces = (matchs) => {
  return {
    type: types.GET_MATCHS_FINISHED,
    matchs,
  };
};

const getMatchsError = (msg) => {
  return {
    type: types.GET_MATCHS_ERROR,
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
      dispatch(getMatchsSucces(json.matchs));
    } catch (error) {
      //dispatch(getPublicacionesError("ERROR"));
    }
  };
};

/* DELETE REQUESTED */

const deleteRequested = () => {
  return {
    type: types.DELETE_PUBLI_REQUESTED,
  };
};

const deleteSucces = () => {
  return {
    type: types.DELETE_PUBLI_FINISHED,
  };
};

const deleteError = (msg) => {
  return {
    type: types.DELETE_PUBLI_ERROR,
    msg,
  };
};

export const deletePubli = (idPubli) => {
  return async (dispatch, getState) => {
    console.log(idPubli);
    dispatch(deleteRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media/delete`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({ mediaId: idPubli }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log(json);
      dispatch(deleteSucces());
    } catch (error) {
      dispatch(deleteError("ERROR"));
    }
  };
};

export const acceptMatchs = (match) => {
  return async (dispatch, getState) => {
    dispatch(closeMatchRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/match/close`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log(json);
      dispatch(closeMatchSucces(json));
    } catch (error) {
      //dispatch(getPublicacionesError("ERROR"));
    }
  };
};

const closeMatchRequested = () => {
  return {
    type: types.DELETE_PUBLI_REQUESTED,
  };
};

const closeMatchSucces = () => {
  return {
    type: types.DELETE_PUBLI_FINISHED,
  };
};

const closeMatchError = (msg) => {
  return {
    type: types.DELETE_PUBLI_ERROR,
    msg,
  };
};
