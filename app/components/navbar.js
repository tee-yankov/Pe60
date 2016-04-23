import React, {
  Component,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#58D093'
  }
});

class NavBar extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default NavBar;
