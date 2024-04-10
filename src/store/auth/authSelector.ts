import { AppStateType } from "../store";

export const getIsFetching = (state: AppStateType): boolean => {
   return state.user.isFetching;
};

export const getUverifiedEmail = (state: AppStateType): string | null => {
   return state.auth.unverifiedEmail;
};

export const getGoogleSign = (state: AppStateType) => {
   return state.auth.googleSign;
};