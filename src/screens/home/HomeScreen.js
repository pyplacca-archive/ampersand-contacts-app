import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Linking, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { connect } from 'react-redux';
import { ProfileCard } from '../../components';
import { BottomSection } from '../../components/home';
// import { AppContext } from '../../store';
import { colors } from '../../config';


function HomeScreen ({navigation, route, user, ...props}) {
	// const {state: {user}} = useContext(AppContext);
	const [resultIn, setResultIn] = useState(false);

  useEffect(() => {
  	(async () => {
	  	const {scan} = route.params || {};
	  	if (scan && !resultIn) {
	  		setResultIn(true);

	  		const canOpen = await Linking.canOpenURL(scan.data);

				Alert.alert(
					'Scan complete',
					scan.data,
					[
						{ text: 'Cancel' },
						{
							text: !canOpen
								? 'Copy data'
								: 'Open link',
							onPress: !canOpen
								? () => copyToClipboard(scan.data)
								: () => visitUrl(scan.data)
						}
					]
				);
	  	}
  	})()
  }, [route.params])

  const visitUrl = url => {
  	// Linking.openURL(url).catch(err => null);
  	WebBrowser
  	.openBrowserAsync(url)
  	.then(console.log);
  };

  const copyToClipboard = text => {
  	console.log(text);
  };

  const goToScanner = () => {
		setResultIn(false)
		navigation.navigate('scanner')
	}

	return (
		<View style={{ flex: 1 }}>
			<StatusBar style='light'/>
			<View
				style={{
					flexGrow: 1,
					justifyContent: 'center',
					paddingHorizontal: 30,
					paddingVertical: 50,
				}}
			>
				<View style={{ maxWidth: 300 }}>
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
					<QRCode content={user.id}/>
				</View>
				<ProfileCard name={user.name} role={user.role} photo={user.photo}/>
			</View>
			<BottomSection
				text='Want to add a new connection?'
				btnText='Scan QR'
				onBtnPress={goToScanner}
			/>
		</View>
	)
};

export default connect(state => state)(HomeScreen);
