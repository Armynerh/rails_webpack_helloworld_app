// app/javascript/components/Greeting.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/random_message')
      .then(response => setGreeting(response.data.greeting))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
