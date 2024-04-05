import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RedirectType, ThemeModeType } from './appTypes';
import { darkMode, lightMode } from '../../constants/layout';
import { saveToStorage } from '../../utils/saveToStorage';
import { colorModeStorageKey } from '../../constants/storage';

const TOGGLE_FATCHING = 'app/TOGGLE_FATCHING';
const TOGGLE_THEME_MODE = 'app/TOGGLE_THEME_MODE';

const REDIRECT_TO = 'app/REDIRECT_TO';

const REMOVE_REDIRECT = 'app/REMOVE_REDIRECT';

const initialState = {
   isFetching: false,
   themeMode: '',
   redirect: {
      screen: '',
      stack: '',
   } as RedirectType,
};

type StateType = typeof initialState;
const appReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case TOGGLE_FATCHING: {
         return {
            ...state,
            isFetching: !state.isFetching,
         };
      }

      case REDIRECT_TO: {
         return {
            ...state,
            redirect: action.route,
         };
      }

      case REMOVE_REDIRECT: {
         return {
            ...state,
            redirect: {} as RedirectType,
         };
      }

      case TOGGLE_THEME_MODE: {
         return {
            ...state,
            themeMode: action.currentTheme,
         };
      }

      default: return state;
   }
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   toggleFetching: () => { return { type: TOGGLE_FATCHING } as const; },
   setRedirect: (route: RedirectType) => { return { type: REDIRECT_TO, route } as const; },
   removeRedirect: () => { return { type: REMOVE_REDIRECT } as const; },
   toggleThemeMode: (currentTheme: ThemeModeType) => { return { type: TOGGLE_THEME_MODE, currentTheme } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const toggleFetchingApp = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
   };
};

export const makeRedirect = (route: RedirectType): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.setRedirect(route));
   };
};

export const removeRedirect = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.removeRedirect());
   };
};

export const toggleThemeMode = (currentThemeMode: ThemeModeType, needToReverse = false): ThunksTypes => {
   return async (dispatch) => {
      const resolveTheme = needToReverse
         ? currentThemeMode === darkMode ? lightMode : darkMode
         : currentThemeMode;
      dispatch(actions.toggleThemeMode(resolveTheme));

      saveToStorage(colorModeStorageKey, currentThemeMode);
   };
};

export default appReducer;
