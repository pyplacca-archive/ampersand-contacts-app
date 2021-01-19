import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderTitle, HeaderBackImage /*as headerBackImage*/ } from './header';
import { colors } from '../config';


const Stack = createStackNavigator();

export const defaultScreenOptions = {
	headerTitle: props => <HeaderTitle {...props}/>,
	headerTitleAlign: 'center',
	headerBackImage: () => <HeaderBackImage/>,
	headerStyle: {
		backgroundColor: colors.primary,
	},
	headerBackTitleVisible: false,
	headerRightContainerStyle: {
		paddingRight: 30,
		paddingBottom: 20,
	},
	headerLeftContainerStyle: {
		paddingLeft: 15,
	}
};

export function StackNavigation ({screens, screenOptions, ...props}) {
	return (
		<Stack.Navigator
			screenOptions={{
				...defaultScreenOptions,
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
