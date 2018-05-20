import React, { Component } from 'react';
import {
  Menu,
} from 'proton-native';

export default class MainMenu extends Component {
  render() {
    return(
      <Menu label="File">
        <Menu.Item
          type="Item"
          children="Exit"
          onClick={this.props.closeWindow}
          />
      </Menu>
    );
  }
}
