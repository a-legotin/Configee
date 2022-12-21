import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>
      </div>
    );
  }
}
