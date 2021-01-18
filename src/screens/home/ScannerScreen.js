import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';
import { BottomSection } from '../../components/home';
import ScanOutline from '../../icons/scan.svg';


export default function QRScanner ({navigation}) {
	const [accessGranted, setAccessGranted] = useState(null);

  useEffect(() => {
  	// request for permission to access device camera to scan BarCode
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setAccessGranted(status === 'granted');
    })();
  }, []);

  const _onBarCodeScanned = scan => {
  	// navigation.navigate('member-profile')
		navigation.navigate('home', {scan})
  }

  const exitScanner = () => {
  	navigation.goBack()
  }

	return (
		<View style={{ flex: 1 }}>
			<StatusBar hidden/>
			<View
				style={{
					flexGrow: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#000',
					color: '#fff',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingHorizontal: 30,
						paddingVertical: 20,
						width: '100%',
						position: 'absolute',
						top: 20,
						left: 0,
						zIndex: 10
					}}
				>
					<Ionicons name="flash-sharp" size={20} color="grey"/>
					<Pressable onPress={exitScanner}>
						<Ionicons name="close-outline" size={24} color="white"/>
					</Pressable>
				</View>
				{
					accessGranted === null ? (
						<Text>Requesting for camera permission...</Text>
					) : accessGranted === false ? (
						<Text>No access to camera</Text>
					) : (
						<React.Fragment>
							<BarCodeScanner
								onBarCodeScanned={_onBarCodeScanned}
								style={{
									width: '100%',
									// height: '100%',
									flexGrow: 1,
								}}
							/>
							<View
								style={{
									position: 'absolute',
									alignItems: 'center',
								}}
							>
								<ScanOutline width={250} height={250}/>
								<Text
									style={{
										color: '#fff',
										fontSize: 18,
										marginTop: 35
									}}
								>
									Place QR Code Within Frame
								</Text>
							</View>
						</React.Fragment>
					)
				}
			</View>
			<BottomSection
				text='Want to share your contact'
				btnText='Send QR'
				onBtnPress={exitScanner}
			/>
		</View>
	)
};
