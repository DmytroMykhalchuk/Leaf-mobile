import { AppStateType } from "../store";

export const getIsFetching = (state: AppStateType): boolean => {
   return state.user.isFetching;
};

export const getIsAuthorized = (state: AppStateType): boolean => {
   return state.user.isAuthorized;
};