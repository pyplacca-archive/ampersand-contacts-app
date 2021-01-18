import React from 'react';
import { StackNavigation } from '../components/navigators';
import * as Welcome from './welcome';


function WelcomeNavigator () {
	return (
		<StackNavigation
			headerMode='none'
			screens={[
				{
					name: 'welcome',
					component: Welcome.WelcomeScreen,
				},
				{
					name: 'get-started',
					component: Welcome.GetStartedNavigator,
				},
			]}
		/>
	)
};

export default WelcomeNavigator;
