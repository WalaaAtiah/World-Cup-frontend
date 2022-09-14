import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Welcome from '../welcome/Welcome';
import Profile from '../Profile/Profile';
import About from '../About/About'
import Hotels from '../Hotels';
import Youtubee from '../Comments/youtube';
import CupCalendar from '../calender/CupCalendar';
import Comment from '../Comments/Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
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
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
