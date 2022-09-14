import * as React from "react";
import videoBg from './worldCup1.mp4';
import Navbar from "react-bootstrap/Navbar";
import "./Comments.css";

class Youtubee extends React.Component {
 
  render() {
  
    return (
      <>
        <div className="Welcomdiv">
          <Navbar>
            <h2>TOP 30 GOALS WORLD CUP 2018 FIFA RUSSIA</h2>
          </Navbar>
        </div>
        <video src={videoBg} autoPlay loop muted controls >{" "}</video>
      </>
    );
  }
}

export default Youtubee;