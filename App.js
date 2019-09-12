import React, {Fragment, Suspense} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import AppContainer from './src/navigation';
import './src/locales';

console.disableYellowBox = true;

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Suspense fallback={<ActivityIndicator />}>
        <AppContainer />
      </Suspense>
    </Fragment>
  );
};

export default App;
