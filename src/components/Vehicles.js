import React from 'react';
import {Card, CardBlock, CardTitle, CardText, CardSubtitle} from 'reactstrap';

export default class Vehicle extends React.Component {
  render () {
    const {name, model, manufacturer} = this.props;
    return (
      <div>
      <Card>
        <CardBlock>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{model}</CardSubtitle>
          <CardText>{manufacturer}</CardText>
        </CardBlock>
      </Card>
    </div>
    )
  }
}
