import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App
