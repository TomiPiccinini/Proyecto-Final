import { get } from 'lodash';

export const selectLoading = (state) => get(state, 'home.loading', false);
export const selectError = (state) => get(state, 'home.error', false);
export const selectErrorMsg = (state) => get(state, 'home.errorMessage', '');
export const selectPublicaciones = (state) => get(state, 'home.publicaciones', []);