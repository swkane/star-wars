import React from 'react';
import {Jumbotron, Button, Input} from 'reactstrap';

export default class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="container">
          <Jumbotron>
            <h4>What is your name pilot?</h4>
            <form onSubmit={this.props.handleFormSubmit}>
              <Input onChange={this.props.handleNameChange} value={this.props.value} placeholder="Enter your name here" />
              <Button color="primary" type="submit">Submit</Button>
            </form>
            <p>{this.props.pilot}</p>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
