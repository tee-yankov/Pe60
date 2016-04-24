import React, {
  Component,
  ScrollView,
  StyleSheet
} from 'react-native';
import DrawerItem from './drawer-item';

const items = [
  {
    text: 'Home'
  }, {
    text: 'About'
  }, {
    text: 'History'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#58D093',
  },
  controlText: {
    color: 'white',
		fontSize: 20
  },
  button: {
    borderWidth: 1,
    padding: 10,
  }
});

class ControlPanel extends Component {
  renderDrawerItems = () => {
    return items.map((val, index) => (<DrawerItem key={index} text={val.text} />));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderDrawerItems()}
      </ScrollView>
    );
  }
}


export default ControlPanel;
