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
          email: mail,
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

const postPubliSucces = () => {
  return {
    type: types.POST_PUBLIS_FINISHED,
  };
};

const postPubliError = (msg) => {
  return {
    type: types.POST_PUBLIS_ERROR,
    msg,
  };
};

export const postPubli = (mail, data) => {
  return async (dispatch, getState) => {
    dispatch(postPubliRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/media/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({ email: mail, media: data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      dispatch(postPubliSucces());
    } catch (error) {
      dispatch(postPubliError("ERROR"));
    }
  };
};

/* LIKE */

export const postLike = (mail, mediaId, emailReceiver) => {
  return async (dispatch, getState) => {
    dispatch(likeRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/like/save`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
          emailIssuing: mail,
          mediaId: mediaId,
          emailReceiver: emailReceiver,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log(json);
      console.log(json.otherMedia.photoList[0].url);
      if (json.isMatch) {
        console.log('entra if')
        dispatch(likeSucces(json.yourMedia.photoList[0].url));
      }
    } catch (error) {
      dispatch(postPubliError("ERROR"));
    }
  };
};

const likeRequested = () => {
  return {
    type: types.LIKE_PUBLI_REQUESTED,
  };
};

const likeSucces = (foto) => {
  return {
    type: types.LIKE_PUBLI_FINISHED,
    foto,
  };
};

export const closeLike = () => {
  return {
    type: types.CLOSE_LIKE_PUBLI,
  };
};

const likeError = (msg) => {
  return {
    type: types.LIKE_PUBLI_ERROR,
    msg,
  };
};
