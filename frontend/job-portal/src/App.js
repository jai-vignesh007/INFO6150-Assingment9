// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SessionProvider } from './services/SessionContext';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import JobListings from './pages/JobListings/JobListings';
import Contact from './pages/Contact/Contact';
import CompanyShowcase from './pages/CompanyShowcase/CompanyShowcase';

const App = () => {
  return (
    <SessionProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/job-listings" component={JobListings} />
          <Route path="/contact" component={Contact} />
          <Route path="/company-showcase" component={CompanyShowcase} />
        </Switch>
      </Router>
    </SessionProvider>
  );
};

export default App;
