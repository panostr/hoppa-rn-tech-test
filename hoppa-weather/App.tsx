import React, { useEffect, useRef } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Forecast from './screens/Forecast';
import ForecastDetails from './screens/ForecastDetails';


const HomeStack = createStackNavigator();
const AppNav = () => (
  <HomeStack.Navigator
    initialRouteName={"Forecast"}>
    <HomeStack.Screen
      name={"Forecast"}
      component={Forecast}
      screenOptions={{ gestureEnabled: false }}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      }}
    />

    <HomeStack.Screen
      name={"ForecastDetails"}
      component={ForecastDetails}
      screenOptions={{ gestureEnabled: false }}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      }}
    />
  </HomeStack.Navigator>
);


const App = () => {
  const ref = useNavigationContainerRef();
  const routeNameRef = useRef<any>();

  //***** Save the initial route name *****/
  useEffect(() => {
    routeNameRef.current = 'App';
  }, []);
  //***** Save the initial route name *****/


  //***** Deeplinking *****/
  const linking = {
    prefixes: ['com.hoppa://'],
    config: {
      screens: {
        Forecast: {
          path: 'home'
        },
        ForecastDetails: {
          path: 'details'
        }
      }
    }
  };
  //***** Deeplinking *****/


  return (
    <NavigationContainer
      ref={ref}
      linking={linking}
      onStateChange={(state) => {
        const prevScreen = routeNameRef.current;
        const currentScreen = getActiveRouteName(state);
        // if (prevScreen !== currentScreen) {

        // }

        // Save the current route name for later comparision
        ref.current = currentScreen;
      }}>
      <AppNav />
    </NavigationContainer>
  )
};

//***** Get route name for screen tracking *****/
const getActiveRouteName = (navigationState: any): string | null => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
}
//***** Get route name for screen tracking *****/



export default App;