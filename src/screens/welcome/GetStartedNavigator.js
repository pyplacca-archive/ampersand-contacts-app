import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigation } from '../../components/navigators';
import { GetStartedScreen, Register, SignIn } from './get-started';
import { colors } from '../../config';


export default function GetStartedNavigator ({navigation}) {
	return (
		<StackNavigation
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.primary,
				},
				headerTitle: props => <HeaderTitle {...props}/>,
				headerBackImage: () => (
					<MaterialCommunityIcons
						name="keyboard-backspace"
						size={24}
						color="#fff"
					/>
				),
				headerTitleAlign: 'center',
			}}
			screens={[
				{
					name: 'get-started',
					component: GetStartedScreen,
					options: {
						headerShown: false
					}
				},
				{
					name: 'sign in',
					component: SignIn,
				},
				{
					name: 'register',
					component: Register,
				}
			]}
		/>
	)
};

function HeaderTitle (props) {
	return (
		<Text
			style={{
				color: '#fff',
				textTransform: 'capitalize',
				fontSize: 20,
				fontWeight: 'bold',
				letterSpacing: 3,
			}}
		>
			{props.children}
		</Text>
	)
}
