import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, View, Text, Image, Platform } from 'react-native';
import uuid from 'uuid';
import { InputGroup, Button } from '../../../components';
import { ImageFrame, ImagePlaceholder } from '../../../components/get-started';
import { AppContext } from '../../../store';


const inputs = [
	{
		label: 'Full Name',
		type: 'username',
		name: 'name',
		placeholder: 'Jane Doe'
	},
	{
		label: 'Email',
		type: 'emailAddress',
		name: 'email',
		placeholder: 'janedoe@placeholder.com'
	},
	{
		label: 'Phone Number',
		type: 'telephoneNumber',
		name: 'telephone',
		placeholder: '1234567890'
	},
	{
		label: 'Role',
		type: 'none',
		name: 'role',
		placeholder: 'Managing Director'
	},
	{
		label: 'Twitter',
		type: 'none',
		name: 'twitter',
		placeholder: '@janedoe'
	},
	{
		label: 'Linkedin',
		type: 'none',
		name: 'linkedin',
		placeholder: '/jane.doe'
	},
]

export default function Register ({navigation}) {
	const {dispatch} = useContext(AppContext);

	const [values, setValues] = useState({social: {}});
	const [photo, setPhoto] = useState()

	const requestPermission = async () => {
		if (Platform.OS !== 'web') {
		  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		  if (status !== 'granted') {
		    alert('Sorry, we need camera roll permissions to make this work!');
		  }
		}
	};

	const pickImage = async () => {
		await requestPermission();
	  let result = await ImagePicker.launchImageLibraryAsync({
	    mediaTypes: ImagePicker.MediaTypeOptions.Images,
	    allowsEditing: true,
	    aspect: [4, 3],
	    quality: 1,
	  });

	  if (!result.cancelled) {
	  	const photo = {uri: result.uri};
	    setPhoto(photo);
	    handleInputChange('photo')(photo);
	  }
	};

	const handleInputChange = name => {
		return value => {
			if (['twitter', 'linkedin'].includes(name)) {
				values.social[name] = value
			} else {
				values[name] = value
			}
			setValues(values)
		}
	}

	const generateId = () => {
		const {name} = values;
		const charsToUse = Array(...name).slice(0, 16);
		return uuid.v4({
			random: charsToUse.map((_, i) => name.charCodeAt(i))
		})
	}

	const signup = () => {
		navigation.navigate('loading', {message: 'signing up...'})
		const userDetails = Object.assign(values, {id: generateId()});
		console.log(userDetails);

		setTimeout(() => {
			dispatch({
				type: 'register',
				payload: userDetails
			})
		}, 2500)
	}

	return (
		<View style={{ flex: 1 }}>
			<StatusBar style='light'/>
			<ImageFrame>
				{
					!photo ? (
						<ImagePlaceholder onPress={pickImage}/>
					) : (
						<View>
							<Image
								source={photo}
								style={{
									width: '100%',
									resizeMode: 'cover',
									height: '100%'
								}}
							/>
						</View>
					)
				}
			</ImageFrame>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
					padding: 25
				}}
			>
				{
					inputs.map(({name, ...opts}, i) => (
						<InputGroup
							{...opts}
							inputValue={values[name]}
							onChangeText={handleInputChange(name)}
							key={i}
						/>
					))
				}
				<Button
					style={{
						marginVertical: 20,
					}}
					onPress={signup}
				>
					Register
				</Button>
			</ScrollView>
		</View>
	)
};
