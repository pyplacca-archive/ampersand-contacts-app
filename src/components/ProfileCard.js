import React from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from '../config';


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
					// borderWidth: 1,
					// borderColor: '#000'
				}}
			/>
			<View
				style={{
					justifyContent: 'space-between',
					marginLeft: 15,
				}}
			>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 17,
						marginBottom: 5
					}}
				>
					{name}
				</Text>
				<Text
					style={{
						color: colors.textGrey,
						fontSize: 17,
					}}
				>
					{role}
				</Text>
			</View>
		</View>
	)
}
