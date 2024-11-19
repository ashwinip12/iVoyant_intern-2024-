import { createStore} from 'redux';
import { reducer } from './Reducer';

const store=createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;
const listener = () => {
  console.log('State updated:', store.getState());
};

store.subscribe(listener);
export default store;

