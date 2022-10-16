import { get } from 'lodash';

export const selectLoading = (state) => get(state, 'perfil.loading', false);
export const selectError = (state) => get(state, 'perfil.error', false);
export const selectErrorMsg = (state) => get(state, 'perfil.errorMessage', '');
export const selectPerfil = (state) => get(state, 'perfil.perfil', []);