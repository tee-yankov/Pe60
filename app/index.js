import React, {
  Component,
  View,
  Text,
  AppRegistry
} from 'react-native';
import MainView from './components/main';

class Pe60 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainView />
      </View>
    );
  }
}

export default function register() {
  AppRegistry.registerComponent('Pe60', () => Pe60)
};
