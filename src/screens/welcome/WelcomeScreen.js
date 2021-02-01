import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinkButton, AppText } from '../../components';
import logo from '../../../assets/logo.png'


function Welcome ({navigation}) {
	return (
		<View
			style={{
				alignItems: 'center',
				paddingVertical: 130,
				paddingHorizontal: 70,
				justifyContent: 'space-between',
				flex: 1
			}}
		>
			<StatusBar style='dark'/>
			<Image
				source={logo}
				style={{
					height: 50,
					resizeMode: 'contain'
				}}
			/>
			<View>
				<AppText>Ampersand</AppText>
				<AppText>Contacts</AppText>
			</View>
			<LinkButton
				onPress={() => navigation.navigate('get-started')}
			>
				Get Started
			</LinkButton>
		</View>
	)
};

export default Welcome;
