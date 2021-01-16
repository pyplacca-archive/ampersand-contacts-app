import React from 'react';
import { View, Text, Image } from 'react-native';


export default function ProfileCard ({name, role, photo, style}) {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				...style
			}}
		>
			<Image
				source={photo}
				style={{
					width: 55,
					height: 55,
					resizeMode: 'cover',
					borderRadius: 80,
					borderWidth: 1,
					borderColor: '#000'
				}}
			/>
			<View
				style={{
					justifyContent: 'space-between',
					marginLeft: 15,
				}}
			>
				<Text>{name}</Text>
				<Text>{role}</Text>
			</View>
		</View>
	)
}
