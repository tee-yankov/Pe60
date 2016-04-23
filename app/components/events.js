import React, {
  Component,
  ListView,
  StyleSheet,
  View
} from 'react-native';

import Tile from './tile';
import NavBar from './navbar';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
  }
});

class Events extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      tiles: ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
    };
  }

  renderTiles() {
    return (
      <Tile />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <ListView
          contentContainerStyle={styles.container}
          renderRow={this.renderTiles}
          dataSource={this.state.tiles} />
      </View>
    );
  }
}

export default Events;
