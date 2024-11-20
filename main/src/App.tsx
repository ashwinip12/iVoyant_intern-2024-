
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import {store} from './store';
import { buyCake, buyIcecream } from './Action'; 


type RootState = ReturnType<typeof store.getState>;

const CakeComponent: React.FC = () => {
const numberOfIcecream = useSelector((state: RootState) => state.icecream.icecream);
  const numberOfCakes = useSelector((state: RootState) => state.cake.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
       <h2>Number of icecream: {numberOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <h1>Redux</h1>
      <CakeComponent />
    </div>
  </Provider>
);

export default App;
