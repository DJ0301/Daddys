import React, { useState } from 'react';
import Footer from './Components/Footer';
import './App.css';
import ClgFinder from "./Pages/ClgFinder";
import ClgInterview from "./Pages/ClgInterview";
import JobInterview from "./Pages/JobInterview";
import ResumeBldr from "./Pages/ResumeBldr";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [refreshPage, doIt] = useState([])

  return (
    <div className="App">
        <div className='Navigation'>
        <Router>
          <Switch>
            <Route path="/ClgFinder" exact component={ClgFinder} />
            <Route path="/ClgInterview" exact component={ClgInterview} />
            <Route path="/JobInterview" exact Component={JobInterview} />
            <Route path="/ResumeBldr" exact Component={ResumeBldr} />
          </Switch>
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App
