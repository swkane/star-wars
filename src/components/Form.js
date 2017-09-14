import React from 'react';
import {Jumbotron, Button, Input} from 'reactstrap';

export default class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="container">
          <Jumbotron>
            <h4>What is your name pilot?</h4>
            <form>
              <Input placeholder="Enter your name here" />
              <Button color="primary" type="submit">Submit</Button>
            </form>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
