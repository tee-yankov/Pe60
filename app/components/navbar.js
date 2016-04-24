import React, {
  Component,
  View,
  StyleSheet,
	TouchableNativeFeedback,
	Text,
  Image
} from 'react-native';

import Logo from './logo';

import { Actions } from 'react-native-router-flux';

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
  },
	titleContainer: {
		height: 54,
		flex: 1,
		transform: [
      {
        translateY: 5
      }
		]
	},
	title: {
		color: 'white',
		fontSize: 36,
		fontFamily: 'lobster',
		textAlign: 'center'
	}
});

class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
				<TouchableNativeFeedback
					background={TouchableNativeFeedback.Ripple('#fafafa', true)}
					onPress={() => {
            Actions.pop();
          }}>
					<View>
						{!this.props.backButton ?
							<Image
								style={styles.hamburger}
								source={require('../images/hamburger.png')} /> :
							<Image
								style={styles.arrows}
								source={require('../images/arrows.png')} />
						}
					</View>
				</TouchableNativeFeedback>
					{!this.props.backButton ?
						<View style={styles.logoContainer}>
              <Logo />
						</View> :
						<View style={styles.titleContainer}>
							<Text style={styles.title}>
								{this.props.title}
							</Text>
						</View>
					}
					<View style={styles.hamburger}/>
      </View>
    );
  }
}

export default NavBar;
