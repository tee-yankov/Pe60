import React, {
  Component,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
	TouchableNativeFeedback
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 12,
    width: width / 2 - 24,
    height: 200,
    backgroundColor: '#82E3B2',
    flexDirection: 'column'
  },
	textContainer: {
    flex: 2,
		justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
	},
  titleContainer: {
    flex: 6,
    backgroundColor: '#58D093',
    alignSelf: 'stretch',
    padding: 6
  },
	buttonContainer: {
		flex: 1,
    backgroundColor: '#58D093',
    alignSelf: 'stretch',
    padding: 5
  },
	event: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold'
	},
	company: {
		color: '#fff',
		fontSize: 16
	},

	button: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
  image: {
    flex: 3
  },
  eventTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  eventSubTitle: {
    fontSize: 12,
    color: '#FFFFFF'
  }
});

class Tile extends Component {
	seeEventInfo = (e) => {
		console.log(e);
	};

  render() {
    return (
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple('#fafafa', true)}
				onPress={() => {
					Actions.details(
						{
							eventTitle: this.props.eventTitle,
							eventSubTitle: this.props.eventSubTitle,
							image: this.props.image
						}
					);
				}}
			>
				<View style={styles.container}>
					<Image style={styles.image}
						source={{uri: this.props.image}} />
					<View  style={styles.textContainer}>
						<View style={styles.titleContainer}>
							<Text style={styles.eventTitle}>
								{this.props.eventTitle}
							</Text>
							<Text style={styles.eventSubTitle}>
								{this.props.eventSubTitle}
							</Text>
						</View>
						<View style={styles.buttonContainer}>
							<TouchableNativeFeedback
								background={TouchableNativeFeedback.Ripple('#fafafa', true)}
								onPress={() => {
									Actions.details(
										{
											eventTitle: this.props.eventTitle,
											eventSubTitle: this.props.eventSubTitle,
											image: this.props.image
										}
									);
								}}
								>
								<View>
									<Text style={styles.button}>
										+
									</Text>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
			</TouchableNativeFeedback>
    );
  }
}

export default Tile;
