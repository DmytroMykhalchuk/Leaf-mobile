import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction, thunk } from 'redux-thunk';

const TOGGLE_FATCHING = 'user/TOGGLE_FATCHING';
const AUTHORIZE_SESSION = 'user/AUTHORIZE_SESSION';

const initialState = {
   isFetching: false,
   isAuthorized: false,
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
         }
      }

      default: return state;
   }
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   toggleFetching: () => { return { type: TOGGLE_FATCHING } as const; },
   authorizeSession: () => { return { type: AUTHORIZE_SESSION } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const toggleFetchingApp = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.toggleFetching());
   };
};

export const authorizeSession = (): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.authorizeSession());
   };
};

export default userReducer;
