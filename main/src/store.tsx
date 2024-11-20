

import { createStore, combineReducers } from "redux";
import { userReducer } from "./Reducer"; 

const rootReducer = combineReducers({
  users: userReducer,
});


export const store = createStore(rootReducer);


export type RootState = ReturnType<typeof rootReducer>;

