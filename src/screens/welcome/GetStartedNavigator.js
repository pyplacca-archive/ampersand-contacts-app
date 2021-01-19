import React from 'react';
import { StackNavigation } from '../../components/navigators';
import * as GetStarted from './get-started';
import { screenModalOptions } from '../../config';


export default function GetStartedNavigator ({navigation}) {
	return (
		<StackNavigation
			screenOptions={{
				cardOverlayEnabled: true,
			}}
			mode='modal'
			screens={[
				{
					name: 'get-started',
					component: GetStarted.GetStartedScreen,
					options: {
						headerShown: false
					}
				},
				{
					name: 'sign in',
					component: GetStarted.SignIn,
				},
				{
					name: 'register',
					component: GetStarted.Register,
				},
				{
					name: 'loading',
					component: GetStarted.Loading,
					options: {
						...screenModalOptions,
						headerShown: false,
					}
				}
			]}
		/>
	)
};
