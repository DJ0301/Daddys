import Footer from '../components/Footer.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className='Navigation'>
        <Router>
            <Switch>
              <Route path='/ClgFinder'><button>College Finder</button></Route>
              <Route path='/ClgInterview'><button>College Interviews</button></Route>
              <Route path='/JobInterview'><button>Job Interview</button></Route>
              <Route path='/ResumeBldr'><button>Resume Builder</button></Route>
            </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App
