import React from 'react';
import { Pressable, View, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HeaderLogo } from '../header';
import { colors } from '../../config';


export default function HomeScreenHeader ({navigation}) {
	const [paddingTop, iconSize, logoHeight] = [
		StatusBar.currentHeight + 30, 24, 35
	];
	return (
		<View
			style={{
				position: 'relative',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				paddingTop,
				backgroundColor: colors.primary
			}}
		>
			<HeaderLogo
				style={{
					margin: 0,
					height: logoHeight
				}}
			/>
			<Pressable
				onPress={() => navigation.navigate('my-profile')}
				style={{
					position: 'absolute',
					right: 30,
					top: paddingTop - (iconSize / 2) + (logoHeight / 2)
				}}
			>
				<AntDesign name="user" size={iconSize} color="#fff"/>
			</Pressable>
		</View>
	)
};
