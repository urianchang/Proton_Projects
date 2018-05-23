import React, { Component } from 'react';
import {
  Menu,
} from 'proton-native';

export default class MainMenu extends Component {
  render() {
    return(
      <Menu label="Game">
        <Menu.Item
          type="Item"
          children="Reset"
          onClick={this.props.resetGame}
          />
        <Menu.Item
          type="Item"
          children="Exit"
          onClick={this.props.closeWindow}
          />
      </Menu>
    );
  }
}
