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
            <Switch>
              <Route path='/ClgFinder' exact Component={ClgFinder}><button>College Finder</button></Route>
              <Route path='/ClgInterview' exact Component={ClgInterview}><button>College Interviews</button></Route>
              <Route path='/JobInterview' exact Component={JobInterview}><button>Job Interview</button></Route>
              <Route path='/ResumeBldr' exact Component={ResumeBldr}><button>Resume Builder</button></Route>
            </Switch>
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App
