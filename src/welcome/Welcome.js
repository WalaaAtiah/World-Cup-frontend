import React from 'react';
import "./Welcome.css"
import axios from "axios";
import Groups from "../components/groups/groups"
import CupCalendar from '../calender/CupCalendar';
import History from '../history/history/history';
class Welcome extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}groups`)
      // console.log("email",user.user.email)
      .then((result) => {
        console.log(result.data);
        this.setState({
          groups: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
   return (
<>
      <section className="Home">
        <div className='calenderimag'>
          <img className="Home-img" src="https://i.pinimg.com/564x/d3/8e/f4/d38ef4f9e3a0b11f15f092dd89bf1cb0.jpg"/>
          <div className='AppCalender'>
          <CupCalendar />
          </div>
        </div>
        <div className="group-header">
            <h3> List of groups of the FIFA World Cup</h3>
          </div>
          <section className="group_component">
          <Groups groups={this.state.groups}/>
          </section>
        
          <section>
          <div className="group-header">
            <h3> List of winners of the FIFA World Cup</h3>
          </div>
          <History/>
          </section>
        
        </section>
        
        </>
    )
  }
}

export default Welcome;
