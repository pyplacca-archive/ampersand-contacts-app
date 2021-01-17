import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';


export default function BottomSection ({text, btnText, onBtnPress}) {
	return (
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
			<Text style={{ fontSize: 16 }}> { text } </Text>
			<Button
				inverted
				onPress={onBtnPress}
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
				{ btnText }
			</Button>
		</View>
	)
};
