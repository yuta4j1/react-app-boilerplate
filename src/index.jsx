import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
  greeting() {
    return 'Hello, World!';
  }

  render() {
    return <div>{this.greeting()}</div>;
  }
}

render(<Hello />, document.getElementById('app'));
