import React from 'react';
import { Provider } from 'mobx-react/native';
import stores from './mobx';
import AppNavigator from './routes/AppNavigator';

const App = () => (
  <Provider {...stores}>
    <AppNavigator />
  </Provider>
);

export default App;
