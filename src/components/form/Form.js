import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormComponent() {
  let [input, setInput] = useState('');

  function submitEvent(event) {
    event.preventDefault();
    fetchEvent(input);
  }

  function fetchEvent(country) {
    const endpointUrl = `https://covid-19-data.p.rapidapi.com/country?name=${country}`;

    // RapidAPI host
    const rapidApiHost = 'covid-19-data.p.rapidapi.com';

    // YOUR RapidAPI key
    const rapidApiKey = '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67';

    const options = {
      headers: {
        'x-rapidapi-host': rapidApiHost,
        'x-rapidapi-key': rapidApiKey,
      },
    };
    fetch(endpointUrl, options)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        console.log(body);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Form onSubmit={submitEvent}>
      <Form.Group>
        <Form.Control
          size='md'
          id='items'
          name='items'
          type='text'
          placeholder='Enter Country'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;
