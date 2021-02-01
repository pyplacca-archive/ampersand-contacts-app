import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, View, Text, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { auth, db, storage } from '../../../firebase';
import { InputGroup, Button, ErrorLabel } from '../../../components';
import { ImageFrame, ImagePlaceholder } from '../../../components/get-started';
import { colors, dbName } from '../../../config';
// import { AppContext } from '../../../store';


function Register ({navigation, dispatch}) {
	// const {dispatch} = useContext(AppContext);

	const [values, setValues] = useState({social: {}});
	const [error, setError] = useState();
	const [photo, setPhoto] = useState();

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

	const signup = () => {
		navigation.navigate('loading', {message: 'signing up...'})
		// create user account
		auth
		.createUserWithEmailAndPassword(values.email, values.password)
		.then(async ({user: {uid}}) => {
			const userInfo = Object.assign(values, {id: uid});
			delete userInfo.password;
			// store user record/details into our cloud database (firestore)
			db.collection(dbName).doc(uid).set(userInfo)
			.then(() => {
				dispatch({
					type: 'register',
					payload: userInfo
				})
			})
			.catch(handleError)
		})
		.catch(handleError)
	}

	const handleError = err => {
		setError(err.message || err)
		navigation.pop()
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
				{ error ? <ErrorLabel>{error}</ErrorLabel> : null }

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

export default connect()(Register);


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
		label: 'Password',
		type: 'password',
		name: 'password',
	},
	{
		label: 'Phone Number',
		type: 'telephoneNumber',
		name: 'telephone',
		placeholder: '1234567890'
	},
	{
		label: 'Role',
		name: 'role',
		placeholder: 'Managing Director'
	},
	{
		label: 'Twitter',
		type: 'URL',
		name: 'twitter',
		placeholder: '@janedoe'
	},
	{
		label: 'Linkedin',
		type: 'URL',
		name: 'linkedin',
		placeholder: '/jane.doe'
	},
]
