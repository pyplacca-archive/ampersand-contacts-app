import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import { InputGroup, Button, LinkButton } from '../../../components';
import { ImageFrame } from '../../../components/get-started';
import { colors } from '../../../config';


let errorTimeout;

export default function SignIn () {
	const [showError, setShowError] = useState(false);
	const [values, setValues] = useState({})

	const handleInputChange = name => {
		return value => setValues({
			...values,
			[name]: value
		})
	};

	const handleSignIn = () => {
		if (!credentialsAreValid()) {
			clearTimeout(errorTimeout)
			setShowError(true)
			errorTimeout = setTimeout(() => setShowError(false), 5000)
		} else {
			showLoadingScreen()
		}
	}

	const credentialsAreValid = () => {
		const {email, password} = values;
		return email && password
	}

	const showLoadingScreen = () => {

	}

	return (
		<View
			style={{
				flex: 1
			}}
		>
			<StatusBar style='light'/>
			<ImageFrame>
				<Image
					source={require('../../../../assets/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg')}
					style={{
						flex: 1,
						width: '100%',
						// resizeMode: 'cover'
					}}
				/>
			</ImageFrame>
			<ScrollView
				contentContainerStyle={{
					// flex: .7,
					flexGrow: 1,
					justifyContent: 'center',
					padding: 25
				}}
			>
				{
					showError ? (
						<ErrorLabel>Email or Password is incorrect. Check and try again</ErrorLabel>
					) : null
				}
				<InputGroup
					label='Email'
					type='emailAddress'
					inputValue={values.email}
					onChangeText={handleInputChange('email')}
				/>
				<InputGroup
					label='Password'
					type='password'
					inputValue={values.password}
					onChangeText={handleInputChange('password')}
				/>
				<Button
					onPress={handleSignIn}
					style={{
						marginTop: 20,
						marginBottom: 35,
					}}
				>
					Sign in
				</Button>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<Text>Forgot?</Text>
					<LinkButton
						style={{
							marginLeft: 7,
							paddingHorizontal: 0,
						}}
						textStyle={{
							textTransform: 'capitalize',
							fontWeight: 'normal'
						}}
					>
						Reset Password
					</LinkButton>
				</View>
			</ScrollView>
		</View>
	)
};


function ErrorLabel (props) {
	return (
		<Text
			style={{
				color: colors.primary,
				marginBottom: 20
			}}
		>
			{props.children}
		</Text>
	)
};
