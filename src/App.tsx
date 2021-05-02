import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import TestRoute from './test/route/route';

import './app.style.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <TestRoute />
    </Router>
  );
};

export default App;
