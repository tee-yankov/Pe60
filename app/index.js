import React, {
  Component,
  AppRegistry
} from 'react-native';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Splash from './components/splash';
import Login from './components/login';
import Events from './components/events';
import EventDetails from './components/eventDetails';
import Drawer from './components/drawer';

class Pe60 extends Component {
  render() {
    return (
      <Router>
        <Scene key="drawer" component={Drawer}>
          <Scene key="root" hideNavBar={true}>
            <Scene key="splash" component={Splash} initial={true} title="VolunteerMe" />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="events" component={Events} title="Events" />
            <Scene key="details" component={EventDetails} title="EventDetails" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default function register() {
  AppRegistry.registerComponent('Pe60', () => Pe60);
}
