import { get } from "lodash";

export const selectLoading = (state) => get(state, "chats.loading", false);
export const selectError = (state) => get(state, "chats.error", false);
export const selectErrorMsg = (state) => get(state, "chats.errorMessage", "");
export const selectMatchs = (state) => get(state, "chats.matchs", []);
export const selectUserSelected = (state) => get(state, "chats.selectedUser", null);
