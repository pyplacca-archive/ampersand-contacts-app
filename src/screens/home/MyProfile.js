import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ProfileDetails } from '../../components';
// import { AppContext } from '../../store'


function MyProfile ({user}) {

	// const {state: {user}} = useContext(AppContext);

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

export default connect(state => state)(MyProfile)
