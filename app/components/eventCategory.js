import React, { Component } from 'react';
import {
  StyleSheet,
	ScrollView,
	Text,
	TouchableNativeFeedback,
  View
} from 'react-native';

import faker from 'faker';

import Tile from './tile';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#FFFFFF'
  },
	containerRow: {
    flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
    flexWrap: 'wrap',
		marginLeft: 20,
		marginRight: 20
	},
	title: {
		marginTop: 5,
		color: '#333',
		fontFamily: 'lobster',
		fontSize: 30
	},
	subtitle: {
		color: '#58D093',
		fontSize: 20
	},
});

class EventCategory extends Component {
  constructor(props) {
    super(props);
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push({
        eventTitle: faker.company.companyName(),
        eventSubTitle: faker.company.catchPhrase(),
        image: faker.image.image()
      });
    }
    this.state = {
			events: events
    };
  }

  renderTiles() {
		return this.state.events.map((item, key) => {
			return (
				<Tile
					key={key}
					eventTitle={item.eventTitle}
					eventSubTitle={item.eventSubTitle}
					image={item.image} />
			);
		});
  }

  render() {
    return (
      <View style={{flex: 1}}>
				<View style={styles.containerRow}>
					<Text style={styles.title}>
						{this.props.title}
					</Text>
					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple('#fafafa', true)}
						onPress={() => {
							Actions.events({title: this.props.title});
						}}
						>
						<View>
							<Text style={styles.subtitle}>
								MORE
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
        <ScrollView
					contentContainerStyle={styles.container}
					horizontal={true}>
					{this.renderTiles()}
				</ScrollView>
      </View>
    );
  }
}

export default EventCategory;
