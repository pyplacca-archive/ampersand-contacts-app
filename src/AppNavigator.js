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
      {
        !props.signedIn
        ? <WelcomeNavigator/>
        : <HomeNavigator/>
      }
    </NavigationContainer>
  );
};

export default connect(state => state)(AppNavigator);
