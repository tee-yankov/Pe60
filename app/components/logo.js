import React, {
  Component,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  mainText: {
    fontSize: 64,
    fontFamily: 'lobster',
    color: '#FFFFFF'
  },
  theV: {
    width: 64,
    height: 64
  }
});

class Logo extends Component {
  render() {
    return (
      <Text style={styles.mainText}>
        <Image style={styles.theV}
          source={require('../images/theV.png')} />
        olunteerMe
      </Text>
    );
  }
}

export default Logo;
