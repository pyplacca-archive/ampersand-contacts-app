import React from 'react';
// import { Text } from 'react-native';
import { StackNavigation } from '../../components/navigators';
import { GetStartedScreen, Register, SignIn } from './get-started';


export default function GetStartedNavigator ({navigation}) {
	return (
		<StackNavigation
			screens={[
				{
					name: 'get-started',
					component: GetStartedScreen,
					options: {
						headerShown: false
					}
				},
				{
					name: 'sign in',
					component: SignIn,
				},
				{
					name: 'register',
					component: Register,
				}
			]}
		/>
	)
};
