import * as types from "./types";
import { checkStatus, parseJSON } from "../../utils/request";

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
      console.log("chatMatchs", json);
      if (json.matchs != []) {
        dispatch(getMatchsSucces(json.matchs));
      } else {
        dispatch(getMatchsSucces([]));
      }
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

/* GET MATCHS */

const setMessageRequested = () => {
  return {
    type: types.GET_MATCHS_REQUESTED,
  };
};

const setMessageSucces = (matchs) => {
  return {
    type: types.GET_MATCHS_FINISHED,
    matchs,
  };
};

const setMessageError = (msg) => {
  return {
    type: types.GET_MATCHS_ERROR,
    msg,
  };
};

export const setMessage = (body) => {
  return async (dispatch, getState) => {
    dispatch(setMessageRequested());
    const requestURL = `http://bartermatch-proyecto.herokuapp.com/match/message`;
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      const json = await parseJSON(response_1);
      console.log("chatMatchs", json);
      dispatch(setMessageSucces(json.matchs));
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

export const setSelectedUserStore = (user) => {
  console.log(user);
  return {
    type: types.SET_SELECTED_USER,
    user,
  };
};

export const restoreSelectedUser = () => {
  return {
    type: types.RESTORE_SELECTED_USER,
  };
};
