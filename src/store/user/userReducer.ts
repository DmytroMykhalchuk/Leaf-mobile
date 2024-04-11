import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction, thunk } from 'redux-thunk';
import { ProfileType } from './userTypes';
import { deleteDataFormStorage } from '../../utils/deleteDataFormStorage';
import { tokenStorageKey } from '../../constants/storage';
import { removeAccessToken } from '../../api/api';
import { userApi } from '../../api/userApi';

const TOGGLE_FATCHING = 'user/TOGGLE_FATCHING';
const AUTHORIZE_SESSION = 'user/AUTHORIZE_SESSION';

const SET_PROFILE = 'user/SET_PROFILE';
const LOGOUT = 'user/LOGOUT';

const initialState = {
   isFetching: false,
   isAuthorized: false,
   profile: null as null | ProfileType,
};

type StateType = typeof initialState;

const userReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case TOGGLE_FATCHING: {
         return {
            ...state,
            isFetching: !state.isFetching,
         };
      }

      case AUTHORIZE_SESSION: {
         return {
            ...state,
            isAuthorized: true,
         };
      }

      case SET_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }

      case LOGOUT: {
         return {
            ...state,
            isAuthorized: false,
            profile: null,
         };
      }

      default: return state;
   }
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   toggleFetching: () => { return { type: TOGGLE_FATCHING } as const; },
   authorizeSession: () => { return { type: AUTHORIZE_SESSION } as const; },
   setProfile: (profile: ProfileType) => { return { type: SET_PROFILE, profile } as const; },
   logout: () => { return { type: LOGOUT } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const toggleFetchingApp = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
   };
};

export const initProfile = (profile: ProfileType): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.setProfile(profile));
   };
};

export const authorizeSession = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.authorizeSession());
   };
};

export const fetchProfile = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
      const response = await userApi.fetchProfile();

      if (response?.code === 200) {
         dispatch(actions.setProfile(response.data))
         dispatch(actions.authorizeSession());
      }

      dispatch(actions.toggleFetching());
   };
};

export const logout = (): ThunksTypes => {
   return async (dispatch) => {
      deleteDataFormStorage(tokenStorageKey);
      removeAccessToken();
      dispatch(actions.logout());
   };
};

export default userReducer;