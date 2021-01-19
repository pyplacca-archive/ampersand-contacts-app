import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ProfileDetails } from '../../components';


export default function MemberProfile ({route: {params}}) {
	return (
		<View
			style={{
				flex: 1,
				padding: 20,
				paddingVertical: 30,
			}}
		>
			<StatusBar style='light' hidden={false}/>
			<ProfileDetails
				// name='Drew Barnes'
				// role='Tech Lead & Co-Founder'
				// social={{
				// 	twitter: '@drew_bms',
				// 	linkedin: '@lht'
				// }}
				// telephone='+233 (245) 234 123'
				// email='drewbarnes@ampersandllc.co'
				// photo={{uri: 'https://ampersandllc.co/wp-content/uploads/2019/11/drew.jpg'}}
				{...params.details}
			/>
		</View>
	)
};
