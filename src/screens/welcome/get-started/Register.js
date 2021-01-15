import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import { InputGroup, Button } from '../../../components';
import { ImageFrame, ImagePlaceholder } from '../../../components/get-started';
import { AppContext } from '../../../store';


const inputs = [
	{label: 'Full Name', type: 'username'},
	{label: 'Email', type: 'emailAddress'},
	{label: 'Phone Number', type: 'telephoneNumber'},
	{label: 'Role', type: 'none'},
	{label: 'Twitter', type: 'none'},
	{label: 'Linkedin', type: 'none'},
]

export default function Register ({navigation}) {
	const {state, dispatch} = useContext(AppContext);
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<StatusBar style='light'/>
			<ImageFrame>
				{
					!state.user.photo
					? <ImagePlaceholder/>
					: <Image source={state.user.photo}/>
				}
			</ImageFrame>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
					padding: 25
				}}
			>
				{
					inputs.map((opts, i) => (
						<InputGroup {...opts} key={i}/>
					))
				}
				<Button
					style={{
						marginVertical: 20,
					}}
				>
					Register
				</Button>
			</ScrollView>
		</View>
	)
};
