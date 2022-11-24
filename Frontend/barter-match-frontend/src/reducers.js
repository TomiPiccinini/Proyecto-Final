/*
Combine all reducers in this file and export the combined reducers.
*/

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import homeReducer from "./store/HomePubli/reducer";
import perfilReducer from "./store/Perfil/reducer";
import loginReducer from "./store/Login/reducer";
import chatsReducer from "./store/Chats/reducer";

/*
Merges the main reducer with the router state and dynamically injected reducers
*/

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    //aca van los reducers que vayamos creando
    home: homeReducer,
    perfil: perfilReducer,
    login: loginReducer,
    chats: chatsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
