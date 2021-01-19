import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator } from 'react-native';
import { BlurView } from "@react-native-community/blur";


export default function Loading ({route: {params}}) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				padding: 20,
			}}
		>
			<ActivityIndicator size='large' color='#fff'/>
			<Text
				style={{
					marginTop: '5%',
					fontSize: 17,
					color: '#fff',
					textTransform: 'uppercase'
				}}
			>
				{params?.message || 'Loading...'}
			</Text>
		</View>
	)
};
