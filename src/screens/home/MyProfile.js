import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../../firebase';
import { ProfileDetails, Button } from '../../components';
// import { AppContext } from '../../store'


function MyProfile ({user, dispatch}) {

	// const {state: {user}} = useContext(AppContext);

	const signOut = () => {
		auth.signOut()
		.then(() => dispatch({type: 'sign_out'}))
	}

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
			<Button
				style={{
					marginTop: 30
				}}
				onPress={signOut}
			>
				Sign Out
			</Button>
		</View>
	)
};

export default connect(state => state)(MyProfile)
