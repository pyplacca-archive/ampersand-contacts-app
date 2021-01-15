import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors } from '../config';


export default function Button ({children, onPress, style={}}) {
	return (
		<Pressable
			style={{
				borderRadius: 5,
				backgroundColor: colors.primary,
				padding: 17,
				alignItems: 'center',
				justifyContent: 'center',
				...style
			}}
			onPress={onPress}
		>
			<Text
				style={{
					color: '#fff',
					textTransform: 'uppercase',
					letterSpacing: 2.5
				}}
			>
				{ children }
			</Text>
		</Pressable>
	)
}
