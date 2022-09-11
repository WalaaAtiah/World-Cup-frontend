import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Welcome from '../welcome/Welcome';
import Profile from '../Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from '../Comments/Comments';
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
              exact path="/Profile"
              element={<Profile />}
            >
            </Route>
            <Route 
              exact path="/comment"
              element={<Comment />}
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
