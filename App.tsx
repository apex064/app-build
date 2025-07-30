import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/state/store';
import RootStack from './app/navigation/rootStack/root.stack';
import ThemeProvider from './app/providers/theme.provider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
