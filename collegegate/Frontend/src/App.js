import React, { useState } from 'react';
import Footer from './Components/Footer';
import './App.css';
import ClgFinder from "./Pages/ClgFinder";
import ClgInterview from "./Pages/ClgInterview";
import JobInterview from "./Pages/JobInterview";
import ResumeBldr from "./Pages/ResumeBldr";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    console.log("handleSubmit called");
    e.preventDefault();
    fetch("http://localhost:3001/",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };


  const [refreshPage, doIt] = useState([])

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
        <textarea placeholder='hi'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
        <div className='Navigation'>
        <Router>
          <Switch>
            <Route path="/ClgFinder" exact component={ClgFinder} />
            <Route path="/ClgInterview" exact component={ClgInterview} />
            <Route path="/JobInterview" exact component={JobInterview} />
            <Route path="/ResumeBldr" exact component={ResumeBldr} />
          </Switch>
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App