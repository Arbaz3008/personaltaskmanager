import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import PersonalTasksScreen from './src/screens/PersonalTasksScreen';

const App = () => (
  <Provider store={store}>
    <PersonalTasksScreen />
  </Provider>
);

export default App;
