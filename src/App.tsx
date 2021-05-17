import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PrayerTimes from './controllers/PrayerTimes';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <PrayerTimes />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
