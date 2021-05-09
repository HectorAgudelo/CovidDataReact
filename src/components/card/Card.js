import React from 'react';
import Form from '../form/Form'
import Card from 'react-bootstrap/Card';


function CardComponent() {
  return (
    <Card className="text-center">
    <Card.Header>Latest Covid-19 Data</Card.Header>
    <Card.Body>
      <Card.Title>Covid Stats</Card.Title>
      <Card.Text>
      Find out the current confirmed, recovered, critical and death counts for countries around the world.
      </Card.Text>
      <Form/>
    </Card.Body>
    <Card.Footer className="text-muted">Copyright &copy; 2021 Hector Agudelo-Carmona</Card.Footer>
  </Card>
  );
}

export default CardComponent;
