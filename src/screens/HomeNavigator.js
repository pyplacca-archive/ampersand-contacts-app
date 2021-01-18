import React, { useContext } from 'react';
import { StackNavigation } from '../components/navigators';
import { HomeScreenHeader } from '../components/home';
import * as Home from './home';
import { horizontalCardStyle } from '../config';


function HomeNavigator ({navigation}) {
	return (
		<StackNavigation
			screens={[
				{
					name: 'home',
					component: Home.HomeScreen,
					options: {
						header: props => <HomeScreenHeader {...props}/>,
					}
				},
				{
					name: 'scanner',
					component: Home.QRScanner,
					options: {
						headerShown: false,
						...horizontalCardStyle,
						gestureEnabled: false,
					}
				},
				{
					name: 'my-profile',
					component: Home.MyProfile,
					options: {
						title: 'My Profile'
					}
				},
				{
					name: 'member-profile',
					component: Home.MemberProfile,
					options: {
						title: 'Member Profile'
					}
				}
			]}
		/>
	)
}

export default HomeNavigator;
