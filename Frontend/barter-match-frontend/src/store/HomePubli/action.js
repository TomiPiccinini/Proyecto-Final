import { selectMail } from "../Login/selectors";
import * as types from "./types";

const getPublicacionesRequested = () => {
  return {
    type: types.GET_PUBLIS_REQUESTED,
  };
};

const getPublicacionesSucces = (publicaciones) => {
  return {
    type: types.GET_PUBLIS_FINISHED,
    publicaciones,
  };
};

const getPublicacionesError = (msg) => {
  return {
    type: types.GET_PUBLIS_ERROR,
    msg,
  };
};

export const getPublicaciones = (mail) => {
  console.log("get publis");
  const asd = {
    isHome: true,
    email: "fran@gmail.com",
  };
  console.log("body", asd);
  return async (dispatch, getState) => {
    dispatch(getPublicacionesRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: {
          isHome: true,
          email: "fran@gmail.com",
        },
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      /*if (response.status === "1") {
        dispatch(getPublicacionesSucces(response.result));
      } else {
        dispatch(getPublicacionesError(response.message));
      }*/
    } catch (error) {
      console.log(error);
      //dispatch(getPublicacionesError("ERROR"));
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
    publicacion,
  };
};

const postPubliError = (msg) => {
  return {
    type: types.POST_PUBLIS_ERROR,
    msg,
  };
};

export const postPubli = (data) => {
  return async (dispatch, getState) => {
    const mail = selectMail(getState());
    console.log(mail);
    dispatch(postPubliRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: { email: mail, Media: data },
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
      dispatch(postPubliError("ERROR"));
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

export const deletePublicacion = (mail) => {
  return async (dispatch, getState) => {
    dispatch(deleteRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media/delete`;
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
      dispatch(deleteError("ERROR"));
    }
  };
};
