import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setGreeting } from '../reducers';

const Greeting = ({ greeting, setGreeting }) => {
  useEffect(() => {
    fetch('/api/greetings/random')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting));
  }, [setGreeting]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { setGreeting })(Greeting);
