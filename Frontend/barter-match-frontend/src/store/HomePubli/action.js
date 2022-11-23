import { selectMail } from "../Login/selectors";
import * as types from "./types";
import { checkStatus, parseJSON } from "../../utils/request";

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

/*usuarios: 
alva","1234","alva@gmail.com
franco","1234","franco12@gmail.com
*/

export const getPublicaciones = (mail) => {
  return async (dispatch, getState) => {
    dispatch(getPublicacionesRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
          isHome: true,
          email: "alva@gmail.com",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      if (response_1.status === 200) {
        dispatch(getPublicacionesSucces(json.media_list));
      } else {
        dispatch(getPublicacionesError("Error"));
      }
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
    console.log("data", data);
    dispatch(postPubliRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({ email: "franco12@gmail.com", media: data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      console.log(response_1);
      const json = await parseJSON(response_1);
      console.log(json);

      /*if (response.status === "1") {
        dispatch(postPubliSucces(response.result));
      } else {
        dispatch(postPubliError(response.message));
      }*/
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

/* LIKE */

export const postLike = (data) => {
  return async (dispatch, getState) => {
    const mail = selectMail(getState());
    console.log("data", data);
    dispatch(postPubliRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/like/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
          emailIssuing: "string",
          mediaId: 0,
          emailReceiver: "string",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      console.log(response_1);
      const json = await parseJSON(response_1);
      console.log(json);

      /*if (response.status === "1") {
        dispatch(postPubliSucces(response.result));
      } else {
        dispatch(postPubliError(response.message));
      }*/
    } catch (error) {
      dispatch(postPubliError("ERROR"));
    }
  };
};
