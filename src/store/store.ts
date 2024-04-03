import appReducer from './app/appReducer';
import userReducer from './user/userReducer';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';

let rootReducer = combineReducers({
   app: appReducer,
   user: userReducer,
});

// @ts-ignore
// const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// @ts-ignore
export default store;

export type AppDispatch = typeof store.dispatch

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
