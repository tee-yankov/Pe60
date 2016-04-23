import React, {
  Component,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Logo from './logo';

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#58D093',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  hamburger: {
    width: 50,
    height: 50
  },
  logoContainer: {
    height: 64,
    transform: [
      {
        translateX: -20
      },
      {
        scaleY: 0.8
      },
      {
        scaleX: 0.8
      }
    ]
  }
});

class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.hamburger}
          source={require('../images/hamburger.png')} />
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    );
  }
}

export default NavBar;
