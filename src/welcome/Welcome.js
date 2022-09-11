import React from 'react';
import "./Welcome.css"
import axios from "axios";
import Groups from "../components/groups/groups"
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

      <section className="Home">
        <div >
          <img className="Home-img" src="https://i.pinimg.com/564x/d3/8e/f4/d38ef4f9e3a0b11f15f092dd89bf1cb0.jpg"/>
        </div>
        <Groups groups={this.state.groups} />
        </section>

    )
  }
}

export default Welcome;
