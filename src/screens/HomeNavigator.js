import React, { useContext } from 'react';
import { StackNavigation } from '../components/navigators';
import { HomeScreenHeader } from '../components/home';
import { HomeScreen, MyProfile, MemberProfile, QRScanner } from './home';


function HomeNavigator ({navigation}) {
	return (
		<StackNavigation
			screens={[
				{
					name: 'home',
					component: HomeScreen,
					options: {
						header: props => <HomeScreenHeader {...props}/>,
					}
				},
				{
					name: 'scanner',
					component: QRScanner,
					options: {
						headerShown: false
					}
				},
				{
					name: 'my-profile',
					component: MyProfile,
					options: {
						title: 'My Profile'
					}
				},
				{
					name: 'member-profile',
					component: MemberProfile,
					options: {
						title: 'Member Profile'
					}
				}
			]}
		/>
	)
}

export default HomeNavigator;
