import React, { Component } from 'react';
import {
  render,
  Window,
  App,
  Form,
  Text,
  TextInput,
  ProgressBar,
  Area,
  Button,
  Box,
  Menu,
} from 'proton-native';


class MainMenu extends Component {
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



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gold: 0,
      isClosed: false,
    }
    this.closeWindow = this.closeWindow.bind(this);
    this.makeGold = this.makeGold.bind(this);
  }

  closeWindow() {
    this.setState({isClosed: true})
  }

  makeGold(location) {
    const current_gold = this.state.gold;
    let gold_earned = 0;
    switch (location) {
      case "Farm":
        gold_earned = 10;
        break;
      case "Casino":
        gold_earned = -10;
        break;
      case "Dojo":
        gold_earned = 20;
        break;
      default:
        gold_earned = 0;
    }
    const gold = current_gold + gold_earned;
    this.setState({gold});
  }

  render() {
    const { isClosed, gold } = this.state;
    return (
      <App>
        <MainMenu
          closeWindow={this.closeWindow}
          />
        <Window
          title="Ninja Gold!"
          size={{w: 500, h: 500}}
          menuBar={true}
          closed={isClosed}
          >
          <Box>
            <Text>{`You have: ${gold} gold pieces`}</Text>
            <Button onClick={this.makeGold}>
              Farm
            </Button>
            <Button onClick={this.makeGold}>
              Casino
            </Button>
            <Button onClick={this.makeGold}>
              Dojo
            </Button>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Main />);
