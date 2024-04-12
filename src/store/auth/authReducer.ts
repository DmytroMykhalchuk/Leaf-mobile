import { AppStateType, InferActionsTypes } from '../store';
import { authApi } from '../../api/authApi';
import { authorizeSession, initProfile } from '../user/userReducer';
import { CreateAccountType, GoogleSignType, GoogleUserResponse, UpdateProfileType } from './authTypes';
import { deleteDataFormStorage } from '../../utils/deleteDataFormStorage';
import { Dispatch } from 'redux';
import { getDataFromStorage } from '../../utils/getDataFromStorage';
import { saveAccessToken } from '../../api/api';
import { saveToStorage } from '../../utils/saveToStorage';
import { ThunkAction } from 'redux-thunk';
import { unverifiedEmailStorageKey } from '../../constants/storage';

const TOGGLE_FATCHING = 'user/TOGGLE_FATCHING';
const SET_UVERIFIED_EMAIL = 'user/SET_UVERIFIED_EMAIL';
const SET_GOOGLE_SIGN = 'user/SET_GOOGLE_SIGN';

const initialState = {
   isFetching: false,
   unverifiedEmail: null as null | string,
   googleSign: {
      id: null,
      email: null,
   } as GoogleSignType,
};

type StateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case TOGGLE_FATCHING: {
         return {
            ...state,
            isFetching: !state.isFetching,
         };
      }
      case SET_UVERIFIED_EMAIL: {
         return {
            ...state,
            unverifiedEmail: action.email,
         };
      }
      case SET_GOOGLE_SIGN: {
         return {
            ...state,
            googleSign: action.googleSign,
         }
      }
      default: return state;
   }
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   toggleFetching: () => { return { type: TOGGLE_FATCHING } as const; },
   setUnverifiedEmail: (email: string) => { return { type: SET_UVERIFIED_EMAIL, email } as const; },
   setGoogleSign: (googleSign: GoogleSignType) => { return { type: SET_GOOGLE_SIGN, googleSign } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const toggleFetching = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
   };
};

export const createAccount = (user: CreateAccountType, googleSign: GoogleSignType, navigateNext: Function): ThunksTypes => {
   return async (dispatch) => {
      const providerName = 'google';

      dispatch(toggleFetching());

      const provider = {
         id: googleSign?.id,
         name: providerName,
      };

      const response = await authApi.createAccount(user, provider);

      if (response.code !== 200) {
         dispatch(toggleFetching());
         return;
      }

      if (response?.authorization && response?.authorization?.token) {
         saveAccessToken(response.authorization.token);
         dispatch(authorizeSession());
         dispatch(initProfile(response.data));
         return
      }

      dispatch(actions.setUnverifiedEmail(user.email))
      saveToStorage(unverifiedEmailStorageKey, user.email);
      navigateNext();

   };
};

export const checkUverifiedEmail = (navigateToConfirmation: Function): ThunksTypes => {
   return async (dispatch) => {
      const unverifiedEmail = await getDataFromStorage(unverifiedEmailStorageKey);

      if (!unverifiedEmail) {
         return;
      }

      dispatch(actions.setUnverifiedEmail(unverifiedEmail))
      navigateToConfirmation();
   };
};

export const clearUnverifiedEmail = (): ThunksTypes => {
   return async () => {
      deleteDataFormStorage(unverifiedEmailStorageKey)
   };
};

export const requestEmailCode = (email: string): ThunksTypes => {
   return async () => {
      authApi.requestEmailVerificationCode(email);
   };
};

export const verifyEmailCode = (email: string, code: number): ThunksTypes => {
   return async (dispatch) => {
      dispatch(toggleFetching());
      const response = await authApi.verifyEmailCode(email, code);

      if (response.code === 200) {
         dispatch(initProfile(response.data));
         deleteDataFormStorage(unverifiedEmailStorageKey);
      }

      if (response?.authorization && response?.authorization?.token) {
         saveAccessToken(response.authorization.token);
         dispatch(authorizeSession());
      }

      dispatch(toggleFetching());
   };
};

export const loginByGoogle = (user: GoogleUserResponse, navigateToCreateAccount: Function): ThunksTypes => {
   return async (dispatch) => {
      dispatch(toggleFetching());
      const response = await authApi.loginByGoogle(user.email, user.id);

      if (response.code === 404) {
         const googleSign: GoogleSignType = {
            email: user.email,
            id: user.id,
         };

         dispatch(actions.setGoogleSign(googleSign));
         navigateToCreateAccount();
         return;
      }

      if (response.code === 200) {
         dispatch(initProfile(response.data));
         deleteDataFormStorage(unverifiedEmailStorageKey);
      }

      if (response?.authorization && response?.authorization?.token) {
         saveAccessToken(response.authorization.token);
         dispatch(authorizeSession());
      }

      dispatch(toggleFetching());
   };
};

export const confirmEmailByProvider = (email: string, providerId: string): ThunksTypes => {
   return async (dispatch) => {
      const providerName = 'google';
      dispatch(toggleFetching());

      const response = await authApi.confirmEmailByProvider(email, providerId, providerName);

      if (response?.code === 200) {
         dispatch(initProfile(response.data));
         deleteDataFormStorage(unverifiedEmailStorageKey);
      }

      if (response?.authorization && response?.authorization?.token) {
         saveAccessToken(response.authorization.token);
         dispatch(authorizeSession());
      }


      dispatch(toggleFetching());
   };
};

export default authReducer;