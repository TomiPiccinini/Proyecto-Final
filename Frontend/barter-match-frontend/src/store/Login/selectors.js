import { get } from 'lodash';

export const selectMail = (state) => get(state, 'login.mail', '');