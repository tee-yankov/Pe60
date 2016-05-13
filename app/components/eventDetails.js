import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableNativeFeedback
} from 'react-native';

import NavBar from './navbar';
import Divider from './divider';

import Volunteers from './volunteers';
import { Actions } from 'react-native-router-flux';

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
		marginLeft: 20,
		marginRight: 20
	},
	volunteersContainer: {
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
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	imageWrapper: {
		width: width / 2 - 24,
		height: 200
	},
	image: {
    flex: 3
  },
	margin: {
		marginLeft: 20,
		marginRight: 20
	},
	button: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    alignSelf: 'stretch'
  },
  buttonText: {
    fontFamily: 'lobster',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

class EventDetails extends Component {
	render() {
		console.log(this.props);
		return (
			<View style={{flex: 1}}>
				<NavBar
					title={this.props.eventTitle}
					goBack={() => {Actions.pop();}}
					backButton={true} />
				<ScrollView>
					<View style={styles.container}>
						<Text style={[styles.title, styles.centerText]}>
							{this.props.eventTitle}
						</Text>
						<Text style={[styles.subtitle, styles.centerText]}>
							{this.props.eventSubTitle}
						</Text>
						<View style={styles.imageContainer}>
							<View style={styles.imageWrapper}>
								<Image style={styles.image}
									source={{uri: this.props.image}} />
							</View>
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

						<Divider />

						<Text style={[styles.title, styles.margin]}>
							Info
						</Text>
						<Text style={[styles.subtitle, styles.margin]}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Text>

						<Divider />

						<Text style={[styles.title, styles.margin]}>
							Volunteers
						</Text>

						<Volunteers />

						<TouchableNativeFeedback>
							<View style={[styles.button, { backgroundColor: '#5A9EC6' }]}>
								<Text style={styles.buttonText}>
									Volunteer
								</Text>
							</View>
						</TouchableNativeFeedback>
					</View>

				</ScrollView>
			</View>
		);
	}
}

export default EventDetails;
