import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function HeaderLogo ({style, ...props}) {
	return (
		<Image
			source={require('../../assets/logo-tint.png')}
			style={{
				height: 35,
				resizeMode: 'contain',
				marginBottom: 20,
				...style
			}}
			{...props}
		/>
	)
};

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
