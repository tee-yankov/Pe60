import React, {
	Component,
	Text,
	View,
	ScrollView
} from 'react-native';

import faker from 'faker';
import Tile from './tile';

const styles = ({
	container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#FFFFFF',
  },
});

class Volunteers extends Component {
	constructor(props) {
    super(props);
    const volunteers = [];
    for (let i = 0; i < 8; i++) {
      volunteers.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
				city: faker.address.city(),
        image: faker.image.image()
      });
    }
    this.state = {
			volunteers: volunteers
    };
  }

	renderTiles() {
		return this.state.volunteers.map((volunteer, key) => {
			return (
				<Tile
					key={key}
					eventTitle={volunteer.firstName + ' ' + volunteer.lastName}
					eventSubTitle={volunteer.city}
					image={volunteer.image} />
			);
		});
	}

	render() {
		return (
			 <ScrollView
					contentContainerStyle={styles.container}
					horizontal={true}>
					{this.renderTiles()}
				</ScrollView>
		);
	}
}

export default Volunteers;