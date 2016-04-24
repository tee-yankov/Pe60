import React, {
  Component,
  ListView,
  StyleSheet,
	ScrollView,
  View
} from 'react-native';

import Tile from './tile';
import NavBar from './navbar';
import EventCategory from './eventCategory';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    backgroundColor: '#FFFFFF'
  }
});

class Categories extends Component {
  constructor(props) {
    super(props);
    const events = ['Health', 'Art & Culture', 'Education', 'Ecology', 'Children', 'Sports', 'Other'];

    this.state = {
			events: events
    };
  }

  renderCategories() {
		return this.state.events.map((item, key) => {
			return (
				<EventCategory
					title={item}
					key={key} />
			);
		});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar
					backButton={false} />
        <ScrollView
					contentContainerStyle={styles.container}>
					{this.renderCategories()}
				</ScrollView>
      </View>
    );
  }
}

export default Categories;
