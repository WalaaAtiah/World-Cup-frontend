import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import matches from "./ matches.json";
// import { Action } from "history";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Hotels extends Component {






  constructor(props) {
    super(props);
    this.state = {
         location: '',
         x: 0,
         hotelsArr:[]

         };


  }





  displayMatchDetailsAndHotels = (event) => {
    event.preventDefault();

    document.getElementById("omar").style.display=("block");
    console.log(event.target.select.value);
    // let obj = event.target.select.value;
    // let arr= matches.find(item=>{
    //     if (obj == item.MatchNumber){
    //         console.log("insideIf");
    //         return true;
    //     }

    // })

    let y = event.target.select.value;
    this.setState({
        x: event.target.select.value    
    })
    // console.log(arr.Location)
    console.log("this is the index "+this.state.x)
    console.log("query test "+matches[y].Location )

    //API fetch:
const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
    params: {query: matches[y].Location, locale: 'en_US', currency: 'USD'},
    headers: {
      'X-RapidAPI-Key': 'fe69c4ff72mshe94bf22e4599113p1f56acjsn5d2335d2ea2f',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
      console.log(response.data.suggestions[1].entities);
    //   this.setState({
    //     hotelsArr: event.target.select.value    

    // })
  }).catch(function (error) {
      console.error(error);
  });
  }
  render() {


    return (
      <div>
        <h1>Please select one of the matches to see the available Hotels</h1>

        <form onSubmit={this.displayMatchDetailsAndHotels } >
          <label form="cars">Choose a match</label>
          <select name="cars" id="select">
            {matches.map((match, index) => {
              return (
                <>
                {console.log(match)}
                <h1> Location: {match.Location}</h1>
              <option  id="dee"  value={index}>{match.countries} </option>
              </>
              );
            })}
          </select>
          <br></br>
          <button  type="submit">
        Submit
      </button>
      </form>

          <div id="omar" style={{ display: "none" }}>
            <h1>City: {matches[this.state.x].Location}</h1>

          </div>

          <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      </div>
    );
  }
}

export default withAuth0(Hotels);