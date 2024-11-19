// src/App.tsx
import React from 'react';
import PostDataWithHeader from './component/PostDataWithHeader';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <PostDataWithHeader />
    </div>
  </Provider>
);

export default App;
