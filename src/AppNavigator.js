import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './components/navigators';
import HomeNavigator from './screens/HomeNavigator'
import WelcomeNavigator from './screens/WelcomeNavigator'
// import { AppContext } from './store';
import { connect } from 'react-redux';


function AppNavigator (props) {
  // const {state} = useContext(AppContext);
  return (
    <NavigationContainer>
      <StackNavigation
        screenOptions={{
          headerShown: false,
        }}
        screens={
          !props.signedIn ? [
            {
              name: 'welcome',
              component: WelcomeNavigator,
            },
          ] : [
            {
              name: 'home',
              component: HomeNavigator,
            },
          ]
        }
      />
    </NavigationContainer>
  );
};

export default connect(state => state)(AppNavigator);
