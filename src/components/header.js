import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function HeaderTitle (props) {
	return (
		<Text
			style={{
				color: '#fff',
				textTransform: 'capitalize',
				fontSize: 20,
				fontWeight: 'bold',
				letterSpacing: 3,
			}}
		>
			{props.children}
		</Text>
	)
};

export function HeaderBackImage () {
	return (
		<MaterialCommunityIcons
			name="keyboard-backspace"
			size={24}
			color="#fff"
		/>
	)
};
