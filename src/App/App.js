import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Welcome from '../welcome/Welcome';
import Profile from '../Profile/Profile';
import About from '../About/About';
import Hotels from '../Hotels';
import Modulefooter from '../Footer/Modulefooter';
import Comment from '../Comments/Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Youtubee from '../Comments/youtube';
import Data from "../Footer/stadium.json";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      setshow: false,
      selBeast:{},
      
    };
  }
  handleClose = () => {
    this.setState({
      setshow: false,
    });
  };
  Module = (name) => {
    console.log("inside model function")
    this.setState({
      setshow: true,
      selBeast: Data.find((item) => item.name === name),
    });
  };


  render() {
    return (
      <>
        <Router>
        <div className='hedred_fixed'>
          <Header />
          </div>
          <Routes>
            <Route 
              exact path="/"
              element={<Welcome />}
            >
            </Route>
            <Route 
              exact path="/About"
              element={<About/>}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={<Profile />}
            >
            </Route>
            <Route 
              exact path="/comment"
              element={<Comment />}
            >
            </Route>
            <Route 
              exact path="/Hotels"
              element={<Hotels />}
            ></Route>
             <Route 
              exact path="/Goals"
              element={<Youtubee />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer Module={this.Module} />
          
        <Modulefooter
          setshow={this.state.setshow}
          handleClose={this.handleClose}
          selBeast={this.state.selBeast}
        />
      
        </Router>
      </>
    )
  }
}

export default App;
