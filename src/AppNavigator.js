import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './components/navigators';
import HomeNavigator from './screens/HomeNavigator'
import WelcomeNavigator from './screens/WelcomeNavigator'


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation
        screens={[
          {
            name: 'welcome',
            component: WelcomeNavigator,
            options: {
              headerShown: false
            }
          },
          {
            name: 'home',
            component: HomeNavigator,
          }
        ]}
      />
    </NavigationContainer>
  );
}

