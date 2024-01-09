// app/javascript/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/greeting" component={Greeting} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
