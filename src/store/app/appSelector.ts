import { AppStateType } from "../store";

export const getIsFetching = (state: AppStateType) => {
   return state.app.isFetching;
};

export const getRedirectScreen = (state: AppStateType) => {
   return state.app.redirect;
};

export const getThemeMode = (state: AppStateType) => {
   return state.app.themeMode;
};