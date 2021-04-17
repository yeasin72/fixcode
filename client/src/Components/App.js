import React, { useEffect, useState} from 'react'
import './App.css';
import Header from './Global/Header/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from './Home/Home';
import Footer from './Global/Footer/Footer';
import Login from './Login/Login';
import Register from './Register/Register';
import Setprofile from './Setprofile/Setprofile';
import Dashboard from './Dashboard/Dashboard';
import Upload from './upload/Upload'
import { useDispatch, useSelector } from 'react-redux';
import { authUser, profileUser } from '../redux/actions/userAction';



function App() {
  const dispatch = useDispatch()
  const [homeload, sethomeload] = useState(true);
  const [lodingstyle, setlodingstyle] = useState({backgroundColor: '#223248', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'});



  const authentication = useSelector(state => state.authentication)
  const { userData } = authentication
  useSelector(state => state.defaultProfile)

  function setLoading(){
    sethomeload(false)
    setlodingstyle({backgroundColor: '#FFFFFF', height: 'auto'})
    
  }
  
  useEffect(() => {
    
// @function submit form
// @resone to create user & reset form
    dispatch(profileUser())
    dispatch(authUser())
    setLoading()
    
  }, [dispatch])


  
  return (
    <div className="App" style={lodingstyle}>
        {homeload?
          
          <ScaleLoader color={'#106FDE'} loading={homeload} size={100} />
        :
        <Router>
          <Header auth={userData} />
          <div className="app-content">
            <Switch>
              
        
              <Route path="/" exact component={Home} />
              <Route path="/upload" exact component={Upload} />
              {!userData ? 
                <>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Redirect from="/dashboard" to="/login" />
                <Redirect from="/setprofile" to="/login" />
                </>
                :
                <>
                <Route path="/setprofile" exact component={Setprofile} />
                  
                <Redirect from="/login" to="/dashboard" />
                <Redirect from="/register" to="/dashboard" />
                <Route path="/dashboard" exact component={Dashboard} />
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
