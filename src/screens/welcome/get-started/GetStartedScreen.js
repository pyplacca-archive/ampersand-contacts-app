import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinkButton } from '../../../components';
import { colors } from '../../../config'


export default function GetStartedScreen ({navigation: {navigate}}) {
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<Image
				source={require('../../../../assets/images/kam-idris-_HqHX3LBN18-unsplash.jpg')}
				style={{
					flex: .6,
					resizeMode: 'cover',
					width: '100%'
				}}
			/>
			<View
				style={{
					padding: 20,
					justifyContent: 'space-between',
					flex: .4
				}}
			>
				<View>
					<Text
						style={{
							marginBottom: 15,
							textTransform: 'uppercase',
							fontSize: 18,
							fontWeight: 'bold',
							letterSpacing: 2.5
						}}
					>
						Keep In touch with the people of Ampersand
					</Text>
					<Text
						style={{
							fontSize: 15,
							letterSpacing: 1.5,
							color: colors.textGrey
						}}
					>
						Sign in or register with your Ampersand email
					</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignitems: 'center',
						justifyContent: 'space-between',
						marginVertical: '5%',
						marginHorizontal: '10%',
					}}
				>
					<LinkButton
						style={styles.button}
						onPress={() => navigate('register')}
					>
						Register
					</LinkButton>
					<LinkButton
						onPress={() => navigate('sign in')}
						style={styles.button}
					>
						Sign in
					</LinkButton>
				</View>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	button: {
		margin: 10
	}
})
