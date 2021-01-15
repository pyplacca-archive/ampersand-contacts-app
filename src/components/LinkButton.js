import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';


function LinkButton ({children, style, textStyle, ...props}) {
	return (
		<Pressable
			style={{
				borderBottomColor: 'red',
				borderBottomWidth: 2,
				padding: 3,
				...style
			}}
			{...props}
		>
			<Text
				style={{
					textTransform: 'uppercase',
					textAlign: 'center',
					fontSize: 14,
					fontWeight: 'bold',
					...textStyle
				}}
			>
				{ children }
			</Text>
		</Pressable>
	)
};

export default LinkButton;
