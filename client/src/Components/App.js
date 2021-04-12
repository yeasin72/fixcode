import React from 'react'
import './App.css';
import Header from './Global/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Global/Footer/Footer';



function App() {
 
  return (
    <div className="App">
        <Router>
          <Header />
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
