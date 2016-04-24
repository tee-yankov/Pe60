import React, {
  Component,
  ListView,
  StyleSheet,
  View
} from 'react-native';

import faker from 'faker';

import Tile from './tile';
import NavBar from './navbar';

import { Actions } from 'react-native-router-flux';

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
    const events = [];
    for (let i = 0; i < 69; i++) {
      events.push({
        eventTitle: faker.company.companyName(),
        eventSubTitle: faker.company.catchPhrase(),
        image: faker.image.image()
      });
    }
    this.state = {
      tiles: ds.cloneWithRows(events)
    };
  }

  renderTiles(rowData) {
    return (
      <Tile eventTitle={rowData.eventTitle}
        eventSubTitle={rowData.eventSubTitle}
        image={rowData.image} />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar
					title={this.props.title}
					goBack={() => {Actions.categories();}}
					backButton={true} />
        <ListView
          contentContainerStyle={styles.container}
          renderRow={this.renderTiles}
          dataSource={this.state.tiles} />
      </View>
    );
  }
}

export default Events;
