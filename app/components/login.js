import React, {
  Component,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableNativeFeedback
} from 'react-native';

import Logo from './logo';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58D093'
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64
  },
  loginContainer: {
    marginTop: 64,
    alignItems: 'center'
  },
  inputContainer: {
    margin: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 24
  },
  button: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
    alignSelf: 'stretch'
  },
  buttonText: {
    fontFamily: 'lobster',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Logo />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Username"
            style={styles.inputContainer} />
          <TextInput
            placeholder="Password"
            style={styles.inputContainer} />
          <TouchableNativeFeedback
            onPress={() => {
              Actions.events();
            }}>
            <View style={[styles.button, { backgroundColor: '#5A9EC6' }]}>
              <Text style={styles.buttonText}>
                Log In
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={[styles.button, { backgroundColor: '#FFBD6C' }]}>
              <Text style={styles.buttonText}>
                Sign Up
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default Login;
