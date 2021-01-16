import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { Button, ProfileCard } from '../../components';
import { AppContext } from '../../store';
import { colors } from '../../config';
import { str2ab } from '../../utils';


export default function HomeScreen ({navigation}) {
	const {state: {user}} = useContext(AppContext);
	const contactDetails = str2ab(JSON.stringify(user)).toString();
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<StatusBar style='light'/>
			<View
				style={{
					flexGrow: 1,
					justifyContent: 'center',
					paddingHorizontal: 30,
					paddingVertical: 50,
				}}
			>
				<View
					style={{
						maxWidth: 300
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 18,
							marginBottom: 10
						}}
					>
						Exchange Contact Information
					</Text>
					<Text
						style={{
							fontSize: 17,
							color: colors.textGrey
						}}
					>
						Scan this QR below to share your contacts
					</Text>
				</View>
				<View
					style={{
						alignSelf: 'center',
						marginVertical: 70
					}}
				>
					<QRCode content={contactDetails}/>
				</View>
				<ProfileCard name={user.name} role={user.role} photo={user.photo}/>
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 30,
					paddingVertical: 20,
					borderColor: "#d2d2d2",
					borderTopWidth: 1,
					marginTop: 'auto'
				}}
			>
				<Text
					style={{
						fontSize: 16,
					}}
				>
					Want to add a new connection?
				</Text>
				<Button
					inverted
					style={{
						marginLeft: 25,
						paddingHorizontal: 20,
						paddingVertical: 8,
						borderRadius: 3,
					}}
					textStyle={{
						letterSpacing: 0,
						textTransform: 'none'
					}}
				>
					Scan QR
				</Button>
			</View>
		</View>
	)
};
