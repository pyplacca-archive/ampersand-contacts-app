import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image } from 'react-native';
import { InputGroup, Button, LinkButton } from '../../../components';
import { ImageFrame } from '../../../components/get-started';
import { colors } from '../../../config';


export default function SignIn () {
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
				<InputGroup label='Email' type='emailAddress'/>
				<InputGroup label='Password' type='password'/>
				<Button
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
