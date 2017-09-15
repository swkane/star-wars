import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron.js';
import Form from './Form.js';
import Vehicle from './Vehicles';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
    state = {
      vehicles: [],
      value: '',
      pilot: ''
    }


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
handleFormSubmit = (event) => {
  event.preventDefault();
  this.setState({
    pilot: this.state.value,
    value: ''
  })

  // console.log('We submitted the form');
}

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
      .then(r => r.json())
      .then(({results}) =>
        this.setState({vehicles: results}));
  }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    console.log(this.state.vehicles);
    return (
      <div className="App">
        <Jumbotron />
        <Form handleFormSubmit={this.handleFormSubmit} handleNameChange={this.handleNameChange} pilot={this.state.pilot} value={this.state.value} />
        {this.state.vehicles.map((vehicle) => <Vehicle key={vehicle.url} {...vehicle} /> )}

        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
  }
}

export default App;
