import React from "react";
import "./About.css";
import resolutionvideo  from '../About/Assets/fifaqatar.mp4'
// import ReactReadMoreReadLess from "react-read-more-read-less";
import "bootstrap/dist/css/bootstrap.min.css";
import bayan from '../About/Assets/resize-bayan.jpg'
import Amani  from '../About/Assets/amani.jpg'
import walaa from '../About/Assets/walaa.jpg'
import omarD from '../About/Assets/omarD.jpg'
import omarAli from '../About/Assets/omarSaadeh.jpg'
import fb from '../About/Assets/facebook.png'
import inst from '../About/Assets/instagram.png'
import Li from '../About/Assets/linkedin.png'
import twit from '../About/Assets/twitter.png'
import gith from '../About/Assets/github.png'
class About extends React.Component {
  render() {
    return (
      <>
      
        {/* <Button  onClick={this.muteThevideo}
        startIcon = {<VolumeOffOutlinedIcon /> } */}
        
        {/* ></Button> */}

        
         <video src={resolutionvideo} id="mute"
        style={{ objectFit: "cover", width: "100vw", height: "70vh", marginLeft:"-1%",marginRight:"-1%" }}
        autoPlay loop muted controls >
        {" "}
      </video>
      

    
       
        
         
        <div className="container">
          <div id="float">
            <div id="maincontainer">
              <div id="thecard">
                <div id="thefront"></div>
                <div id="theback"></div>
              </div>
            </div>
          </div>

          <p>
           <h3 style={{color:"brown",textAlign:"justify",paddingTop:"6%"}}>About Our Website: </h3> <h5 style={{textAlign:"justify",paddingBottom:"5%"}}>The 2022 FIFA World Cup is scheduled to be the
            22nd running of the FIFA World Cup competition, the quadrennial
            international men's football championship contested by the senior
            national teams of the member associations of FIFA. It is scheduled
            to take place in Qatar from 20 November to 18 December 2022, We had
            created a website for the World Cup held in the State of Qatar that
            gives information about the teams participating in the league,
            determines the stadium in which the match will be held and gives the
            option for the user to book a hotel available in the area
            surrounding the stadium for the match,and finally the fan can add a comment on the match and
            follow the latest news in the league.</h5>
            </p>

          
        </div>
         
        <h1 className="title">Our Team  </h1>
        
          <div id="Ourcards">
        {/* <pic # 1 ></pic> */}
        <div class="container">
        <div className="team">
          <div className="team-img">
            <img src={bayan} alt="Team Image"/>
              
            <div className="team-social">
              <a className="social-tw" href="https://twitter.com/"><i className="fab fa-twitter"><img src={twit}/></i></a>
              <a className="social-fb" href="https://www.facebook.com/bnbon.ali"><i className="fab fa-facebook-f"><img src={fb}/></i></a>
              <a className="social-li" href="https://www.linkedin.com/in/bayan-bushnaq/"><i className="fab fa-linkedin-in"><img src={Li}/></i></a>
              <a className="social-in" href="https://www.instagram.com/Bushnaqbayan"><i className="fab fa-instagram"><img src={inst}/></i></a>
              <a className="social-gh" href="https://github.com/BayanBushnaq"><i className="fab fa-github"><img src={gith}/></i></a>
            </div>
          </div>
          <div className="team-content">
            <h2>Bayan Bushnaq</h2>
            <h3>Freelancer Programmer </h3>
            <p> Python Programmer &amp; Data scientist </p>
            <div className="team-skill">
              <div className="skill-name">
                <p>HTML</p><p>80%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p><p>70%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
              <div className="skill-name">
                <p>React</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        
            </div>
            </div> 
          
       {/* <pic # 2 ></pic> */}
       <div class="container">
        <div className="team">
          <div className="team-img">
            <img src={Amani} alt="Team Image"/>
              
            <div className="team-social">
              <a className="social-tw" href="https://twitter.com/amani_m_alzoubi"><i className="fab fa-twitter"><img src={twit}/></i></a>
              <a className="social-fb" href="https://www.facebook.com/amani_m_alzoubi"><i className="fab fa-facebook-f"><img src={fb}/></i></a>
              <a className="social-li" href="https://www.linkedin.com/in/amani-m-al-zoubi-793635232"><i className="fab fa-linkedin-in"><img src={Li}/></i></a>
              <a className="social-in" href="https://www.instagram.com/amani_m_alzoubi"><i className="fab fa-instagram"><img src={inst}/></i></a>
              <a className="social-gh" href="https://github.com/amani51"><i className="fab fa-github"><img src={gith}/></i></a>
            </div>
          </div>
          <div className="team-content">
            <h2>Amani M ALZoubi</h2>
            <h3>Electrical engineer</h3>
            <p>Web Developer - Python</p>
            <div className="team-skill">
              <div className="skill-name">
                <p>HTML</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p><p>95%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
              <div className="skill-name">
                <p>React</p><p>96%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        
            </div>
            </div> 
       {/* <pic # 3 ></pic> */}
       <div class="container">
        <div className="team">
          <div className="team-img">
            <img src={walaa} alt="Team Image"/>
              
            <div className="team-social">
              {/* <a className="social-tw" href="https://twitter.com/"><i className="fab fa-twitter"><img src={twit}/></i></a> */}
              <a className="social-fb" href="https://www.facebook.com/people/%D9%88%D9%84%D8%A7%D8%A1-%D8%B9%D8%B7%D9%8A%D8%A9/100002134357943/"><i className="fab fa-facebook-f"><img src={fb}/></i></a>
              <a className="social-li" href="https://www.linkedin.com/in/walaa-atiah-103aab209"><i className="fab fa-linkedin-in"><img src={Li}/></i></a>
              <a className="social-in" href="https://www.instagram.com/walaa__waleed/"><i className="fab fa-instagram"><img src={inst}/></i></a>
              <a className="social-gh" href="https://github.com/WalaaAtiah"><i className="fab fa-github"><img src={gith}/></i></a>
            </div>
          </div>
          <div className="team-content">
            <h2>Wala'a Waleed Atiyh</h2>
            <h3>Electrical Engineering</h3>
            <p>Web Developer - Python </p>
            <div className="team-skill">
              <div className="skill-name">
                <p>HTML</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p><p>85%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
              <div className="skill-name">
                <p>React</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        
            </div>
            </div> 
       {/* <pic # 4 ></pic> */}
       <div class="container">
        <div className="team">
          <div className="team-img">
            <img src={omarD} alt="Team Image"/>
              
            <div className="team-social">
              <a className="social-tw" href="https://twitter.com/dee_desu?t=53wNQrVYNXsVo+LoPKhg1Q&s=09"><i className="fab fa-twitter"><img src={twit}/></i></a>
              <a className="social-fb" href="https://www.facebook.com/omar.darweesh.50"><i className="fab fa-facebook-f"><img src={fb}/></i></a>
              <a className="social-li" href="https://www.linkedin.com/in/omar-darweesh-a033571a8/"><i className="fab fa-linkedin-in"><img src={Li}/></i></a>
              <a className="social-in" href="https://www.instagram.com/omar-darweesg97"><i className="fab fa-instagram"><img src={inst}/></i></a>
              <a className="social-gh" href="https://github.com/dee-desu"><i className="fab fa-github"><img src={gith}/></i></a>
            </div>
          </div>
          <div className="team-content">
            <h2>Omar Darwish</h2>
            <h3>computer science</h3>
            <p>web development and managing databases</p>
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
                <p>React</p><p>80%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        
            </div>
            </div> 
       {/* <pic # 5 ></pic> */}
       <div class="container">
        <div className="team">
          <div className="team-img">
            <img src={omarAli} alt="Team Image"/>
              
            <div className="team-social">
              <a className="social-tw" href="https://twitter.com/alm7seery"><i className="fab fa-twitter"><img src={twit}/></i></a>
              <a className="social-fb" href="https://www.facebook.com/omaralm7seery"><i className="fab fa-facebook-f"><img src={fb}/></i></a>
              <a className="social-li" href="https://www.linkedin.com/in/omar-ali-647218201/"><i className="fab fa-linkedin-in"><img src={Li}/></i></a>
              <a className="social-in" href="https://www.instagram.com/omar_sa3ada/"><i className="fab fa-instagram"><img src={inst}/></i></a>
              <a className="social-gh" href="https://github.com/omarali1997"><i className="fab fa-github"><img src={gith}/></i></a>
            </div>
          </div>
          <div className="team-content">
            <h2>Omar Ali Saadeh</h2>
            <h3>Autotronics Engineering</h3>
            <p>Artificial intelligence "AI" </p>
            <div className="team-skill">
              <div className="skill-name">
                <p>HTML</p><p>80%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-90"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p><p>90%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-80"></div>
              </div>
              <div className="skill-name">
                <p>React</p><p>95%</p>
              </div>
              <div className="progress">
                <div className="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        
            </div>
            </div> 
            </div>

            {/* <div id="lastvideo">
             
        <video

          src={video1}
          style={{height: "300px",
            width: "100%" }}
          autoPlay
          loop
        >
        </video>
        </div> */}
      </>
    );
  }
}

export default About;
