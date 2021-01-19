import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileCard from './ProfileCard';
import { colors } from '../config';


export default function ProfileDetails(props) {
	/*
		Accepted props:
			name,
			role,
			social (links to social accounts),
			telephone,
			email,
			photo,
			location,
			...
	*/
	return (
		<View>
			{/* profile card */}
			<ProfileCard {...props}/>
			{/* Social profile icons */}
			<View
				style={{
					flexDirection: 'row',
					marginTop: 20,
					marginBottom: 30,
				}}
			>
				{
					Object.keys(props.social || {}).map((acc, i) => (
						<Pressable
							key={i}
							style={{
								width: 35,
								height: 35,
								borderRadius: 50,
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: colors.secondary,
								marginRight: 10,
							}}
							onPress={() => {}}
						>
							<Entypo name={acc} size={17} color="#fff"/>
						</Pressable>
					))
				}
			</View>
			{/* rest of information */}
			<View>
				{
					[
						['phone', props.telephone],
						['email', props.email],
						// ['location', props.location]
					].map((list, i) => {
						const [icon, info] = list;
						return info ? (
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginVertical: i && i < 2 ? 15 : 0
								}}
								key={i}
							>
								<MaterialCommunityIcons name={icon} size={20} color={colors.secondary} />
								<Text
									style={{
										marginLeft: 15,
										fontSize: 17
									}}
								>
									{info}
								</Text>
							</View>
						): null
					})
				}
			</View>
		</View>
	)
};
