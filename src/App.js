import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import todoApp from './reducers/reducers'

import Constantdata from './containers/constant.js'
import Binding from './containers/binding.js'
import Event from './containers/event.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
      [
        {
          "id": 1,
          "name": "Foo",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "30"
        },
        {
          "id": 3,
          "name": "Baz",
          "age": "40"
        }
      ],
      content: "Content from state..."
    }
  }
  
  render() {
    var myStyle = {
      fontSize: 20,
      color: '#FF0000',
      width: "80%"
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={myStyle}>
          React Js Tutorial.
        </p>
        <Test />
        <Constantdata/>
        <Binding/>
        <Event />
        <h3>{this.state.content}</h3>
        <h3>Array: {this.props.propArray}</h3>
        <table align="center" style={myStyle}>
          <tbody>
            {this.state.data.map((person, i) =>
              < TableRow key={i} data={person} />)}
          </tbody>
        </table>
    </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
App.defaultProps = {
  propArray: [1, 2, 3, 4, 5]
}
export default App;
