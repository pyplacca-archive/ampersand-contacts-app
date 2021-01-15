import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export function StackNavigation ({screens, ...props}) {
	return (
		<Stack.Navigator {...props}>
			{
				screens.map((props, i) => (
					<Stack.Screen {...props} key={i}/>
				))
			}
		</Stack.Navigator>
	)
};
