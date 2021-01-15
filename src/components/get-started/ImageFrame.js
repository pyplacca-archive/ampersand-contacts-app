import React from 'react';
import { View } from 'react-native';


export default function ImageFrame ({children}) {
	return (
		<View
			style={{
				flex: .2,
				width: '100%',
				minHeight: 190,
				resizeMode: 'cover'
			}}
		>
			{ children }
		</View>
	)
}
