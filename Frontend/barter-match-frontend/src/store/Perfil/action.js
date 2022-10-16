import * as types from "./types";

const getPerfilRequested = () => {
  return {
    type: types.GET_PERFIL_REQUESTED,
  };
};

const getPerfilSucces = (perfil) => {
  return {
    type: types.GET_PERFIL_FINISHED,
    perfil
  };
};

const getPerfilError = (msg) => {
  return {
    type: types.GET_PERFIL_ERROR,
    msg
  };
};

export const getPerfil = () => {
  return async (dispatch, getState) => {
    dispatch(getPerfilRequested());
    const requestURL = ``;
    try {
      const response = await fetch(requestURL, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const users = await parseJSON(response_1);
      if (users.status === "1") {
        dispatch(getPerfilSucces(users.result));
      } else {
        dispatch(getPerfilError(users.message));
      }
    } catch (error) {
      dispatch(getPerfilError('ERROR'));
    }
  };
};
