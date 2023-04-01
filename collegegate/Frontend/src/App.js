import Footer from './Components/Footer.js';
import './App.css';
import ClgFinder from "./Pages/ClgFinder";
import ClgInterview from "./Pages/ClgInterview";
import JobInterview from "./Pages/JobInterview";
import ResumeBldr from "./Pages/ResumeBldr";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className='Navigation'>
        <Router>
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App
