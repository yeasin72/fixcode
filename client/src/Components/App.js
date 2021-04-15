import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Global/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Global/Footer/Footer';
import ScaleLoader from "react-spinners/ScaleLoader";
import Login from './Login/Login';
import Register from './Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../redux/actions/userAction';



function App() {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [appbg, setAppbg] = useState({backgroundColor: '#223248', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'});


  const authentication = useSelector(state => state.authentication)
  const { userData } = authentication


  useEffect(() => {
    
// @function submit form
// @resone to create user & reset form
    dispatch(authUser())
  
    setTimeout(() => {
      setLoading(false)
      setAppbg({backgroundColor: '#FFFFFF', height: 'auto'})
    }, 1000)
  }, [dispatch])


  return (
    <div className="App" style={appbg}>
      {loading ?
        <ScaleLoader color={'#106FDE'} loading={loading} size={50} />
        :
        <Router>
          <Header auth={userData} />
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              {userData ? 
              <>
                <Route path="/login" exact component={Home} />
              <Route path="/register" exact component={Home} />
              </>
              :
              <>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              </>
              }
            </Switch>
          </div>
          <Footer auth={userData} />
        </Router>
      }
    </div>
  );
}

export default App;
