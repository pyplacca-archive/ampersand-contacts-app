import React from 'react';
import { Image, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../config';


export default function ImagePlaceholder ({style}) {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
				backgroundColor: colors.grey,
				...style
			}}
		>
			<AntDesign name="user" size={40} color={colors.primary} />
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
		</View>
	)
};
