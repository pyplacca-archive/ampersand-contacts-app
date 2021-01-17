import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../config';


export default function ImagePlaceholder ({style, onPress}) {
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<Pressable
				onPress={onPress}
				android_ripple={{
					borderless: false,
					color: '#f4f4f4'
				}}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
					backgroundColor: colors.grey,
					...style
				}}
			>
				<AntDesign name="user" size={35} color={colors.primary}/>
				<Text
					style={{
						textTransform: 'uppercase',
						fontWeight: 'bold',
						color: colors.primary,
						marginTop: 10
					}}
				>
					Add profile photo
				</Text>
			</Pressable>
		</View>
	)
};
