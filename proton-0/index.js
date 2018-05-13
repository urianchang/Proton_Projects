import React, { Component } from 'react'; // import from react
import fs from 'fs';
import {
  render,
  Window,
  App,
  TextInput,
  Menu,
  Box,
  Dialog
} from 'proton-native'; // import the proton-native components


class Example extends Component {
  state = { text: '' };

  save() {
    const filename = Dialog('Save');
    fs.writeFileSync(filename, this.state.text);
  }

  open() {
    const filename = Dialog('Open');
    if (filename) {
      let data = fs.readFileSync(filename);
      this.setState({ text: data });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (typeof nextState.text === 'string') {
      return false;
    } else {
      return true;
    }
  }

  render() { // all Components must have a render method
    return (
      <App onShouldQuit={() => console.log('Quitting')}> // you must always include App around everything
        <Menu label="File">
          <Menu.Item type="Item" onClick={() => this.open()}>
            Open
          </Menu.Item>
          <Menu.Item type="Item" onClick={() => this.save()}>
            Save
          </Menu.Item>
          <Menu.Item type="Quit" />
        </Menu>
        <Window
          title="Proton Native Notepad"
          size={{w: 500, h: 500}}
          menuBar={true}
          >
          <Box>
            <TextInput
              onChange={text => this.setState({text})}
              multiline={true}
              >
              {this.state.text}
            </TextInput>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
