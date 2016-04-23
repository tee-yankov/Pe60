import React, {
	Component,
	Dimensions,
	Image,
	View,
	Text,
	StyleSheet
} from 'react-native';

import NavBar from './navbar';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
	},
	containerRow: {
    flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
    flexWrap: 'wrap',
		margin: 10
	},
	title: {
		color: '#333',
		fontFamily: 'lobster',
		fontSize: 30
	},
	subtitle: {
		color: '#333',
		fontSize: 20
	},
	centerText: {
		textAlign: 'center'
	},
	right: {
		textAlign: 'right'
	},
	imageContainer: {
		marginLeft: (width - (width / 2 - 24)) / 2,
		marginTop: 20,
    width: width / 2 - 24,
    height: 200
	},
	image: {
    flex: 3
  }
});

class EventDetails extends Component {
	render() {
		console.log(this.props);
		return (
			<View style={{flex: 1}}>
        <NavBar backButton={true} />
				<View style={styles.container}>
					<Text style={[styles.title, styles.centerText]}>
						{this.props.eventTitle}
					</Text>
					<Text style={[styles.subtitle, styles.centerText]}>
						{this.props.eventSubTitle}
					</Text>
					<View style={styles.imageContainer}>
						<Image style={styles.image}
							source={{uri: this.props.image}} />
					</View>

					<View style={styles.containerRow}>
						<Text style={styles.title}>
							Where?
						</Text>
						<Text style={styles.subtitle}>
							Varna
						</Text>
					</View>
					<View style={styles.containerRow}>
						<Text style={styles.title}>
							When?
						</Text>
						<Text style={styles.subtitle}>
							23.04.2016
						</Text>
					</View>
					<View style={styles.containerRow}>
						<Text style={styles.title}>
							We need
						</Text>
						<Text style={styles.subtitle}>
							10 people
						</Text>
					</View>
				</View>

      </View>
		);
	};
};

export default EventDetails;