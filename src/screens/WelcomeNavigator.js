import React from 'react';
import { StackNavigation } from '../components/navigators';
import { GetStartedNavigator, WelcomeScreen } from './welcome';


function WelcomeNavigator () {
	return (
		<StackNavigation
			headerMode='none'
			screens={[
				{
					name: 'welcome',
					component: WelcomeScreen,
				},
				{
					name: 'get-started',
					component: GetStartedNavigator,
				},
			]}
		/>
	)
};

export default WelcomeNavigator;
