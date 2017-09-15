import React from 'react';
import {Card, CardBlock, CardTitle, CardSubtitle, ListGroup, ListGroupItem} from 'reactstrap';

export default class Vehicle extends React.Component {
  render () {
    const {name, model, manufacturer, vehicle_class, passengers, crew, length, max_atmospheric_speed, cargo_capacity} = this.props;
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle>Vehicle: {name}</CardTitle>
            <CardSubtitle>Model: {model}</CardSubtitle>
            <ListGroup>
              <ListGroupItem className='specs'>Specs</ListGroupItem>
              <ListGroupItem>Manufacturer: {manufacturer}</ListGroupItem>
              <ListGroupItem>Class: {vehicle_class}</ListGroupItem>
              <ListGroupItem>Passengers: {passengers}</ListGroupItem>
              <ListGroupItem>Crew: {crew}</ListGroupItem>
              <ListGroupItem>Length: {length}</ListGroupItem>
              <ListGroupItem>Max Speed: {max_atmospheric_speed}</ListGroupItem>
              <ListGroupItem>Cargo Capacity: {cargo_capacity}</ListGroupItem>
            </ListGroup>
          </CardBlock>
        </Card>
      </div>


    )
  }
}
