import { CardStyleInterpolators } from '@react-navigation/stack';


export const colors = {
	primary: '#fe2b4c',
	secondary: '#434c4e',
	grey: '#ebebeb',
	textPrimary: '#434c4e',
	textGrey: '#acacac'
}

export const horizontalCardStyle = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	gestureResponseDistance: {
		horizontal: 250
	},
	cardStyle: {
		shadowColor: '#000',
		shadowOpacity: .3,
		shadowRadius: 7,
		shadowOffset: {
      width: -3,
      height: 0,
    },
    elevation: 5,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
