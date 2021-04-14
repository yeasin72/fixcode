import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Global/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Global/Footer/Footer';
import ScaleLoader from "react-spinners/ScaleLoader";
import Login from './Login/Login';
import Register from './Register/Register';



function App() {
  const [loading, setLoading] = useState(true);
  const [appbg, setAppbg] = useState({backgroundColor: '#223248', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setAppbg({backgroundColor: '#FFFFFF', height: 'auto'})
    }, 2000)
  }, [])

  return (
    <div className="App" style={appbg}>
      {loading ?
        <ScaleLoader color={'#106FDE'} loading={loading} size={50} />
        :
        <Router>
          <Header />
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </div>
          <Footer />
        </Router>
      }
    </div>
  );
}

export default App;
