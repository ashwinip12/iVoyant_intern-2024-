// import { createStore} from 'redux';
// import { reducer } from './Reducer';
import { CakeReducer,IcecreamReducer } from "./Reducer";
import { combineReducers,createStore } from "redux";

// const store=createStore(reducer);
// export type RootState = ReturnType<typeof store.getState>;
// const listener = () => {
//   console.log('State updated:', store.getState());
// };

// store.subscribe(listener);
// export default store;



const rootReducer= combineReducers({
cake: CakeReducer,
icecream: IcecreamReducer
  }
)
export const store= createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

const listener = () => {
console.log('State updated:', store.getState());
}
store.subscribe(listener);