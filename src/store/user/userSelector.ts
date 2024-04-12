import { AppStateType } from "../store";

export const getIsFetching = (state: AppStateType): boolean => {
   return state.user.isFetching;
};

export const getIsAuthorized = (state: AppStateType): boolean => {
   return state.user.isAuthorized;
};

export const getProfilePicture = (state: AppStateType): string | undefined => {
   return state.user.profile?.picture;
};

export const getProfile = (state: AppStateType) => {
   return state.user.profile;
};