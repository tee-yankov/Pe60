import React, {
  Component,
  View,
	ScrollView,
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
    marginLeft: 34,
		marginRight: 34,
		marginTop: 10,
		marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
		padding: 5,
		fontSize: 20,
		color: '#666'
  },
  button: {
    flex: 1,
    marginLeft: 34,
    marginRight: 34,
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
			<ScrollView style={styles.container}>
				<View >
					<View style={styles.logoView}>
						<Logo />
					</View>
					<View style={styles.loginContainer}>
						<TextInput
							placeholder="Username"
							style={styles.inputContainer} />
						<TextInput
							placeholder="Password"
							password={true}
							style={styles.inputContainer} />
						<TouchableNativeFeedback
							onPress={() => {
								Actions.categories();
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
			</ScrollView>
    );
  }
}

export default Login;
