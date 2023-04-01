import React from 'react';
import './App.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/"
import ClgFinder from "./pages/ClgFinder"
import ClgInterview from "./pages/ClgInterview"
import JobInterview from "./pages/JobInterview"
import ResumeBldr from "./pages/ResumeBldr"


function App() {

// const [moveMap, MoveIt] = useState=(false)

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/ClgFinder"} exact component={ClgFinder}></Route>
            <Route path={"/ClgInterview"} exact component={ClgInterview}></Route>
            <Route path={"/JobInterview"} exact component={JobInterview}></Route>
            <Route path={"/ResumeBldr"} exact component={ResumeBldr}></Route>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;