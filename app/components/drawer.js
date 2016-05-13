import React, { Component } from 'react';
import {
  DefaultRenderer
} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import DrawerContent from './drawer-content';

class MainDrawer extends Component {
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        content={<DrawerContent />}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3}}}
        tweenHandler={Drawer.tweenPresets.parallax} >
        <DefaultRenderer navigationState={children[0]} />
      </Drawer>
    );
  }
}

export default MainDrawer;
