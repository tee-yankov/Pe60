import React, {
	Component,
	View,
	Text,
	StyleSheet
} from 'react-native';

import NavBar from './navbar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
	}
});

class EventDetails extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
        <NavBar backButton={true} />
				<View style={styles.container}>
					<Text style={styles.title}>

					</Text>
				</View>
      </View>
		);
	};
};

export default EventDetails;