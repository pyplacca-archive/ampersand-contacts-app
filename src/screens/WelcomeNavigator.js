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
					// options: {
					// 	headerShown: false
					// },
				},
				{
					name: 'get-started',
					component: GetStartedNavigator,
					// options: {
					// 	headerShown: false
					// }
				},
			]}
		/>
	)
};

export default WelcomeNavigator;
