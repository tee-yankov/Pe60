import React, {
  Component,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Logo from './logo';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#58D093',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  hamburger: {
    width: 50,
    height: 50
  },
	arrows: {
		width: 40,
    height: 40,
		margin: 10
	},
  logoContainer: {
    height: 64,
    transform: [
      {
        translateX: -20
      },
      {
        scaleY: 0.6
      },
      {
        scaleX: 0.6
      }
    ]
  }
});

class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
				{!this.props.backButton ?
					<Image
           style={styles.hamburger}
           source={require('../images/hamburger.png')} /> :
					<Image
           style={styles.arrows}
           source={require('../images/arrows.png')} />
				}

        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    );
  }
}

export default NavBar;
