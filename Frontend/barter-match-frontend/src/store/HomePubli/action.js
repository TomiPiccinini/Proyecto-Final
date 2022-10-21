import * as types from "./types";

const getPublicacionesRequested = () => {
  return {
    type: types.GET_PUBLIS_REQUESTED,
  };
};

const getPublicacionesSucces = (publicaciones) => {
  return {
    type: types.GET_PUBLIS_FINISHED,
    publicaciones
  };
};

const getPublicacionesError = (msg) => {
  return {
    type: types.GET_PUBLIS_ERROR,
    msg
  };
};

export const getPublicaciones = () => {
  return async (dispatch, getState) => {
    dispatch(getPublicacionesRequested());
    const requestURL = `http://localhost:8080/media`;
    try {
      const response = await fetch(requestURL, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      if (response.status === "1") {
        dispatch(getPublicacionesSucces(response.result));
      } else {
        dispatch(getPublicacionesError(response.message));
      }
    } catch (error) {
      dispatch(getPublicacionesError('ERROR'));
    }
  };
};
