import React from 'react'

class test extends React.Component {
    render() {
      return (
        <div class="container">
        
  <h1 className="title">Our Team Card <a href="https://htmlcodex.com/team-page-html-template/">View More 10+ Demo</a></h1>
  <div className="team">
    <div className="team-img">
      <img src="https://demo.htmlcodex.com/660/team-page-html-template/img/team-2-2.jpg" alt="Team Image"/>
        
      <div className="team-social">
        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
        <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    <div className="team-content">
      <h2>Josh Dunn</h2>
      <h3>CEO &amp; Founder</h3>
      <p>Some text goes here that describes about team member</p>
      <div className="team-skill">
        <div className="skill-name">
          <p>HTML</p><p>90%</p>
        </div>
        <div className="progress">
          <div className="progress-bar w-90"></div>
        </div>
        <div className="skill-name">
          <p>CSS</p><p>80%</p>
        </div>
        <div className="progress">
          <div className="progress-bar w-80"></div>
        </div>
        <div className="skill-name">
          <p>jQuery</p><p>70%</p>
        </div>
        <div className="progress">
          <div className="progress-bar w-70"></div>
        </div>
      </div>
    </div>
  
      </div>
      </div>  

      );
    }}
    export default test;
