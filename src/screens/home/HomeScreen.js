import React, { useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { ProfileCard } from '../../components';
import { BottomSection } from '../../components/home';
import { AppContext } from '../../store';
import { colors } from '../../config';
// import { str2ab } from '../../utils';


export default function HomeScreen ({navigation, route}) {
	const {state: {user}} = useContext(AppContext);
	const [resultIn, setResultIn] = useState(false);

  useEffect(() => {
  	const {scan} = route.params || {};
  	if (scan && !resultIn) {
  		setResultIn(true)
  		alert (`BarCode scan complete\n\nType: ${scan.type}\nData: ${scan.data}`)
  	}
  }, [route.params])

  const goToScanner = () => {
		setResultIn(false)
		navigation.navigate('scanner')
	}

	const contactDetails = 'https://codetraingh.com/' // JSON.stringify(str2ab(JSON.stringify(user)));

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
					<QRCode content={contactDetails}/>
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
