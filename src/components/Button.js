import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors } from '../config';


function Button ({children, onPress, style={}, inverted=false, textStyle}) {
	return (
		<Pressable
			style={{
				borderRadius: 5,
				backgroundColor: !inverted ? colors.primary : 'transparent',
				padding: 17,
				borderColor: colors.primary,
				borderWidth: 1.5,
				alignItems: 'center',
				justifyContent: 'center',
				...style
			}}
			onPress={onPress}
		>
			<Text
				style={{
					color: !inverted ? '#fff' : colors.primary,
					textTransform: 'uppercase',
					letterSpacing: 2.5,
					...textStyle
				}}
			>
				{ children }
			</Text>
		</Pressable>
	)
};

export default Button;
