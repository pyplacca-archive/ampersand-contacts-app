import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderTitle, HeaderBackImage /*as headerBackImage*/ } from './header';
import { colors } from '../config';


const Stack = createStackNavigator();

export function StackNavigation ({screens, screenOptions, ...props}) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: props => <HeaderTitle {...props}/>,
				headerTitleAlign: 'center',
				headerBackImage () => <HeaderBackImage/>,
				// headerBackImage,
				headerStyle: {
					backgroundColor: colors.primary,
				},
				...screenOptions
			}}
			{...props}
		>
			{
				screens.map((props, i) => (
					<Stack.Screen {...props} key={i}/>
				))
			}
		</Stack.Navigator>
	)
};
