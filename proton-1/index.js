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
} from 'proton-native';

//: Custom components
import MainMenu from './components/MainMenu';
import InfoBox from './components/InfoBox';
import GoldGenerators from './components/GoldGenerators';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gold: 0,
      isClosed: false,
    }
    this.closeWindow = this.closeWindow.bind(this);
    this.updateGold = this.updateGold.bind(this);
  }

  closeWindow() {
    this.setState({isClosed: true})
  }

  resetGame = () => {
    this.setState({ gold: 0 });
  }

  updateGold(gold_earned) {
    const gold = this.state.gold + gold_earned;
    this.setState({gold});
  }

  render() {
    const { isClosed, gold } = this.state;
    return (
      <App>
        <MainMenu
          closeWindow={this.closeWindow}
          resetGame={this.resetGame}
          />
        <Window
          title="Ninja Gold!"
          size={{w: 500, h: 500}}
          menuBar={true}
          closed={isClosed}
          >
          <Box>
            <InfoBox
              gold={gold}
              />
            <GoldGenerators
              updateGold={this.updateGold}
              />
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Main />);
