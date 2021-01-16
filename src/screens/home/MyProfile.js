import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ProfileDetails } from '../../components';
import { AppContext } from '../../store'


export default function MyProfile () {

	const {state: {user}} = useContext(AppContext);

	return (
		<View
			style={{
				flex: 1,
				padding: 20,
				paddingVertical: 30,
			}}
		>
			<StatusBar style='light'/>
			<ProfileDetails {...user}/>
		</View>
	)
};
