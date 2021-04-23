import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Donations from './components/pages/Donations';
import Merch from './components/pages/Merch';
import Gear from './components/pages/Gear';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>      
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/donations' component={Donations} />
            <Route path='/merch' component={Merch} />
            <Route path='/gear' component={Gear} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
