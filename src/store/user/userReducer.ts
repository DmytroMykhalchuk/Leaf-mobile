import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction, thunk } from 'redux-thunk';
import { ProfileType } from './userTypes';
import { deleteDataFormStorage } from '../../utils/deleteDataFormStorage';
import { tokenStorageKey } from '../../constants/storage';
import { removeAccessToken } from '../../api/api';
import { userApi } from '../../api/userApi';
import { UpdateProfileType } from '../auth/authTypes';
import { authApi } from '../../api/authApi';

const TOGGLE_FATCHING = 'user/TOGGLE_FATCHING';
const AUTHORIZE_SESSION = 'user/AUTHORIZE_SESSION';
const SET_EMAIL = 'user/SET_EMAIL';

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

      case SET_EMAIL: {
         return {
            ...state,
            profile: state?.profile
               ? {
                  ...state.profile,
                  email: action.email,
               } : null,
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
   setEmail: (email: string) => { return { type: SET_EMAIL, email } as const; },
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

export const updateProfile = (user: UpdateProfileType, navigateBack: Function): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
      const response = await userApi.updateProfile(user);

      if (response?.code === 200) {
         dispatch(actions.setProfile(response.data));
         navigateBack();
      }

      dispatch(actions.toggleFetching());
   };
};

export const verifyEmailCode = (code: number, wrongHandler: Function, successHandler: Function): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
      const response = await userApi.verifyEmailCode(code);

      if (response?.code === 200) {
         successHandler();
      } else if (response?.code == 400) {
         wrongHandler();
      }

      dispatch(actions.toggleFetching());
   };
};

export const requestChangeEmail = (email: string): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());

      const response = await userApi.changeEmailRequest(email);

      if (response?.code === 200) {

      }

      dispatch(actions.toggleFetching());
   };
};

export const confirmChangeEmailCode = (code: string, email: string, wrongCodeHandler: Function, successHandler: Function): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());

      const response = await userApi.confirmChangeEmailCode(code);

      if (response?.code === 200) {
         dispatch(actions.setEmail(email));
         successHandler();
      } else if (response?.code === 400) {
         wrongCodeHandler();
      }

      dispatch(actions.toggleFetching());
   };
};

export const changeEmailProvider = (email: string, providerId: string, successHandler: Function): ThunksTypes => {
   return async (dispatch) => {
      const providerName = 'google';
      
      dispatch(actions.toggleFetching());

      const response = await userApi.changeEmailProvider(providerId, providerName, email);

      console.log(email,providerId)
      if (response?.code === 200) {
         dispatch(actions.setEmail(email));
         successHandler();
      }

      dispatch(actions.toggleFetching());
   };
};

export const requestEmailCode = (email: string): ThunksTypes => {
   return async () => {
      userApi.requestEmailCode();
   };
};



export default userReducer;