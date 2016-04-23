import React, {
  Component,
  ListView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import faker from 'faker';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    height: 32,
    backgroundColor: '#BADA55'
  },
  text: {
    color: '#B000B5'
  }
});

class MainView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      companies: ds.cloneWithRows(this.generateData())
    };
  }

  generateData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      data.push({
        name: faker.company.companyName(),
        index: i
      });
    }
    return data;
  }


  renderRow = rowData => {
    return (
      <View key={rowData.index} style={styles.row}>
        <Text style={styles.text}>{rowData.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.companies}
        renderRow={this.renderRow}/>
    );
  }
}

export default MainView;
