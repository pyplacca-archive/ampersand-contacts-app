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

export const screenModalOptions = {
	cardStyle: {
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};
