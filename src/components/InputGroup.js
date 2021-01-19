import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../config';


export default function InputGroup ({label, inputValue, type, onChangeText, placeholder}) {
	return (
		<View
			style={{
				paddingVertical: 10,
				borderBottomWidth: 1,
				borderBottomColor: '#ebebeb',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<Text
				style={{
					// fontWeight: 'bold'
				}}
			>
				{label}
			</Text>
			<TextInput
				textAlign='right'
				textContentType={type}
				placeholder={placeholder || label}
				placeholderTextColor={colors.textGrey}
				value={inputValue}
				onChangeText={onChangeText}
				secureTextEntry={type.includes('password')}
				selectTextOnFocus
			/>
		</View>
	)
};
