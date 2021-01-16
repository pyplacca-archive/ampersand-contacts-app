import React, { useContext } from 'react';
import { StackNavigation } from '../components/navigators';
import { HomeScreen, MyProfile } from './home';
import HomeScreenHeader from '../components/home/Header';


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
					name: 'my-profile',
					component: MyProfile,
					options: {
						title: 'My Profile'
					}
				}
			]}
		/>
	)
}

export default HomeNavigator;
