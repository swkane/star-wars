import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap'
// import App from './App.js';

export default class Jumbo extends Component {
  render = () => {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3"> Star Wars</h1>
          <hr className="my-2" />
          <p>The Vehicles of Start Wars</p>
        </Jumbotron>
      </div>
    );
  }
}
