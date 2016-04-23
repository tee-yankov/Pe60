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
    height: 156,
    backgroundColor: '#82E3B2',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    backgroundColor: '#58D093',
    alignSelf: 'flex-end',
    padding: 12
  },
  image: {
    flex: 2
  }
});

class Tile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.titleContainer}>
          <Text>
            Some event
          </Text>
          <Text>
            Company
          </Text>
        </View>
      </View>
    );
  }
}

export default Tile;
