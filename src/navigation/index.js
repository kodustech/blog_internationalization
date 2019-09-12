import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/Home';
import Language from '../screens/Language';

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // title: 'Home',
      },
    },
    Language: {
      screen: Language,
      navigationOptions: {
        title: 'Idiomas',
      },
    },
  },
  {},
);

export default createAppContainer(tabNavigator);
