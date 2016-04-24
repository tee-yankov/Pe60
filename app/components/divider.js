import React, {
	Component,
	View,
	Image,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
		paddingLeft: 12,
		paddingRight: 12,
		margin: 10
	},
	bar: {
		flex: 1,
		height: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.25)'
	},
	image: {
		height: 34,
		width: 36,
		marginRight: 6,
		marginLeft: 6
	}
});

class Divider extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.bar} />
				<Image style={styles.image} source={require('../images/theVblue.png')} />
				<View style={styles.bar} />
			</View>
		);
	}
}

export default Divider;
