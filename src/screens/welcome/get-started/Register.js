import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import { InputGroup, Button } from '../../../components';
import { ImageFrame, ImagePlaceholder } from '../../../components/get-started';


const inputs = [
	{
		label: 'Full Name',
		type: 'username',
		name: 'fullname',
		placeholder: 'Jane Doe'
	},
	{
		label: 'Email',
		type: 'emailAddress',
		name: 'email',
		placeholder: 'janedoe@placeholder.com'
	},
	{
		label: 'Phone Number',
		type: 'telephoneNumber',
		name: 'telephone',
		placeholder: '1234567890'
	},
	{
		label: 'Role',
		type: 'none',
		name: 'role',
		placeholder: 'Managing Director'
	},
	{
		label: 'Twitter',
		type: 'none',
		name: 'twitter',
		placeholder: '@janedoe'
	},
	{
		label: 'Linkedin',
		type: 'none',
		name: 'linkedin',
		placeholder: '/jane.doe'
	},
]

export default function Register ({navigation}) {
	const [values, setValues] = useState({});
	const [photo, setPhoto] = useState()

	const handleInputChange = name => {
		return value => setValues({
			...values,
			[name]: value
		})
	}

	return (
		<View
			style={{
				flex: 1
			}}
		>
			<StatusBar style='light'/>
			<ImageFrame>
				{
					!photo ? (
						<ImagePlaceholder/>
					) : (
						<View>
							<Image
								source={photo}
								style={{
									width: '100%',
									resizeMode: 'cover',
									height: '100%'
								}}
							/>
						</View>
					)
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
					inputs.map(({name, ...opts}, i) => (
						<InputGroup
							{...opts}
							inputValue={values[name]}
							onChangeText={handleInputChange(name)}
							key={i}
						/>
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
