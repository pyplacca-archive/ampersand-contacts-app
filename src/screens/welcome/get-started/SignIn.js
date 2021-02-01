import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { auth, db } from '../../../firebase';
import { InputGroup, Button, LinkButton, ErrorLabel } from '../../../components';
import { ImageFrame } from '../../../components/get-started';
import { colors, dbName } from '../../../config';


let errorTimeout;

function SignIn (props) {
	const [error, setError] = useState(false);
	const [values, setValues] = useState({})

	const handleInputChange = name => {
		return value => setValues({
			...values,
			[name]: value
		})
	};

	const handleSignIn = () => {
		showLoadingScreen();

		auth.signInWithEmailAndPassword(values.email, values.password)
		.then(({user: {uid}}) => {
			db.collection(dbName).doc(uid).get()
			.then(doc => props.dispatch({
				type: 'sign_in',
				payload: doc.data()
			}))
			.catch(err => clearLoadingScreen(err))
		})
		.catch(err => clearLoadingScreen(err))
	}

	const showLoadingScreen = () => {
		props.navigation.navigate('loading', {message: 'signing in...'});
	}

	const clearLoadingScreen = err => {
		setError(err.message || err)
		props.navigation.pop()
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
				{ error ? <ErrorLabel>{error}</ErrorLabel> : null }

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

export default connect(()=>({}))(SignIn);
