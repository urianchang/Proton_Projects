import React, { Component } from 'react'; // import from react

import { render, Window, App, Button, Dialog } from 'proton-native'; // import the proton-native components

class Example extends Component {
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Window title="Proton Native Rocks!" size={{w: 500, h: 500}} menuBar={false}>
            <Button onClick={() => Dialog('Error', {title: "Message"})}>
              Button
            </Button>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
