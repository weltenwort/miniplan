import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import ActivityListPage from './activity/ListPage';


const store = createStore();

const App = () =>
  (
    <Provider store={store}>
      <ActivityListPage/>
    </Provider>
  );


export default App;
