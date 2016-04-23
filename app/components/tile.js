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
  titleContainer: {
    flex: 1,
    backgroundColor: '#58D093',
<<<<<<< Updated upstream
    alignSelf: 'stretch',
    padding: 6
=======
    alignSelf: 'flex-end',
    padding: 10
  },
	buttonContainer: {
    backgroundColor: '#58D093',
    alignSelf: 'flex-end',
    padding: 10
>>>>>>> Stashed changes
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
		lineHeight: 26
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
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: this.props.image}} />
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
						onPress={() => {
							Actions.details({data:"Custom data", title:'Custom title' });
						}}>
						<View style={styles.buttonContainer}>
							<Text style={styles.button}>
								+
							</Text>
						</View>
          </TouchableNativeFeedback>
				</View>
      </View>
    );
  }
}

export default Tile;
