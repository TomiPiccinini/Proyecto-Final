import configureStore from "../configureStore";
import history from "./history";

const initialState = {};
const store = configureStore(initialState, history);
export default store;