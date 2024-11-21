import { createStore } from "redux";

import {UserReducer} from "./Reducer";

export const store = createStore(UserReducer);

const listener=()=>{
console.log('updated state',store.getState());
}
store.subscribe(listener)