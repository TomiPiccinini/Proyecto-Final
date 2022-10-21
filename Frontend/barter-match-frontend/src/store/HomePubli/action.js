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

export const getPublicaciones = (mail) => {
  return async (dispatch, getState) => {
    dispatch(getPublicacionesRequested());
    const requestURL = `http://localhost:8080/media`;
    try {
      const response = await fetch(requestURL, {
        method: "GET",
        body: {
          "isHome": true,
          "userId": mail
        },
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


/* POST PUBLI */

const postPubliRequested = () => {
  return {
    type: types.POST_PUBLIS_REQUESTED,
  };
};

const postPubliSucces = (publicacion) => {
  return {
    type: types.POST_PUBLIS_FINISHED,
    publicacion
  };
};

const postPubliError = (msg) => {
  return {
    type: types.POST_PUBLIS_ERROR,
    msg
  };
};

export const postPubli = (data) => {
  return async (dispatch, getState) => {
    dispatch(postPubliRequested());
    const requestURL = `http://localhost:8080/media/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: data,
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      if (response.status === "1") {
        dispatch(postPubliSucces(response.result));
      } else {
        dispatch(postPubliError(response.message));
      }
    } catch (error) {
      dispatch(postPubliError('ERROR'));
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
    type: types.DELETE_PUBLI_FINISHED
  };
};

const deleteError = (msg) => {
  return {
    type: types.DELETE_PUBLI_ERROR,
    msg
  };
};

export const deletePublicacion = (mail) => {
  return async (dispatch, getState) => {
    dispatch(deleteRequested());
    const requestURL = `http://localhost:8080/`;
    try {
      const response = await fetch(requestURL, {
        method: "DELETE",
        body: {
          mail: mail,
        },
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      if (response.status === "1") {
        dispatch(deleteSucces(response.result));
      } else {
        dispatch(deleteError(response.message));
      }
    } catch (error) {
      dispatch(deleteError('ERROR'));
    }
  };
};
