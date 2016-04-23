import React, {
  Component,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64
  }
});

class DrawerItem extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={styles.containerButton}>
          <Text>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default DrawerItem;
