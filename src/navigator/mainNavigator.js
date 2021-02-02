import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile199907Navigator from '../features/UserProfile199907/navigator';
import Tutorial199906Navigator from '../features/Tutorial199906/navigator';
import NotificationList199878Navigator from '../features/NotificationList199878/navigator';
import Settings199877Navigator from '../features/Settings199877/navigator';
import Settings199869Navigator from '../features/Settings199869/navigator';
import UserProfile199867Navigator from '../features/UserProfile199867/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile199907: { screen: UserProfile199907Navigator },
Tutorial199906: { screen: Tutorial199906Navigator },
NotificationList199878: { screen: NotificationList199878Navigator },
Settings199877: { screen: Settings199877Navigator },
Settings199869: { screen: Settings199869Navigator },
UserProfile199867: { screen: UserProfile199867Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
