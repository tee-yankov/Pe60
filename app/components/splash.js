import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-spinkit';
import Logo from './logo';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58D093',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20,
    margin: 20,
    backgroundColor: '#E4F9F5'
  },
  buttonText: {
    color: '#40514E',
    fontSize: 24,
    fontFamily: 'lobster'
  },
  logo: {
    width: 200,
    height: 200
  },
  spinnerContainer: {
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerVisible: true,
      viewOpacity: new Animated.Value(0),
      logoViewPosition: new Animated.Value(-100),
      logoViewOpacity: new Animated.Value(1)
    };
  }

  componentDidMount() {
    const { timing, sequence, parallel, spring } = Animated;
    sequence([
      timing(
        this.state.logoViewOpacity,
        {
          toValue: 0,
          delay: 2000,
          duration: 1000,
        }
      ),
      parallel([
        timing(
          this.state.viewOpacity,
          {
            toValue: 1
          }
        ),
        spring(
          this.state.logoViewPosition,
          {
            toValue: 0
          }
        )
      ]
      )
    ])
    .start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[{ opacity: this.state.logoViewOpacity}, styles.spinnerContainer]}>
          <Spinner
            isVisible={this.state.spinnerVisible}
            type="ThreeBounce"
            size={128}
            color="#40514E" />
        </Animated.View>
        <Animated.View style={{ opacity: this.state.viewOpacity, top: this.state.logoViewPosition }}>
          <TouchableHighlight
						underlayColor="#58D093"
            onPress={ () => {
              Actions.login();
            } } >
            <Image style={styles.logo}
              source={require('../images/logo.png')}/>
          </TouchableHighlight>
        </Animated.View>
        <Animated.View style={[styles.buttonContainer, { opacity: this.state.viewOpacity }]}>
          <Logo />
        </Animated.View>
      </View>
    );
  }
}

export default Splash;
