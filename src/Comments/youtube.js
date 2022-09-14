import * as React from "react";
import YouTube from "react-youtube";
import videoBg from "./worldCup.mp4";
import Navbar from "react-bootstrap/Navbar";
import "./Comments.css";

class Youtubee extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <>
        <video vid src={videoBg} autoPlay loop muted />
        <div className="Welcomdiv">
          <Navbar>
            <h2>TOP 30 GOALS WORLD CUP 2018 FIFA RUSSIA</h2>
          </Navbar>
        </div>
        <YouTube
          className="youtubevideo"
          videoId="9r8rWa6ZhFc"
          opts={opts}
          onReady={this._onReady}
          autoPlay
          style={{ marginTop: "1%", marginBottom: "-1%", marginLeft: "25%" }}
        />

        <div className="youtubevideo"></div>
      </>
    );
  }
}

export default Youtubee;
