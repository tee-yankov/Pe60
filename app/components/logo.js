import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mainText: {
    fontSize: 64,
    fontFamily: 'lobster',
    color: '#FFFFFF'
  },
  theV: {
    width: 67,
    height: 64,
    transform: [
      {
        translateX: 8
      },
      {
        translateY: -6
      }
    ]
  }
});

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.theV}
          source={require('../images/theV.png')} />
        <Text style={styles.mainText}>
          olunteery
        </Text>
      </View>
    );
  }
}

export default Logo;
