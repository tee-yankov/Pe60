import React, {
  Component,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

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
    alignSelf: 'stretch',
    padding: 6
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
      </View>
    );
  }
}

export default Tile;
