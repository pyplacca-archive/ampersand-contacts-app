import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './components/navigators';
import HomeNavigator from './screens/HomeNavigator'
import WelcomeNavigator from './screens/WelcomeNavigator'


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation
        screenOptions={{
          headerShown: false,
        }}
        screens={[
          {
            name: 'home',
            component: HomeNavigator,
          },
          {
            name: 'welcome',
            component: WelcomeNavigator,
          },
        ]}
      />
    </NavigationContainer>
  );
};
