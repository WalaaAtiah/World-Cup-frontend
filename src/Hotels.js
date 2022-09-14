import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import matches from "./ matches.json";
// import { Action } from "history";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Hotelsdetail from "./Hotelsdetail";
import "./Hotels.css"

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      x: 0,
      hotelsArr: [],
      transportArr: [],
      landmarkArr: [],
      featuresArr: [],
      setshow: false,
      selName:""
    };
  }

  displayMatchDetailsAndHotels = async (event) => {
    event.preventDefault();

    document.getElementById("omar").style.display = "block";
    document.getElementById("add").style.display = "block";
    document.getElementById("del").style.display = "block";

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
      x: event.target.select.value,
    });
    // console.log(arr.Location)
    // console.log("this is the index " + this.state.x);
    // console.log("query test " + matches[y].Location);

    //API get:
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v2/search",
      params: { query: matches[y].Location, locale: "en_US", currency: "USD" },
      headers: {
        "X-RapidAPI-Key": "fe69c4ff72mshe94bf22e4599113p1f56acjsn5d2335d2ea2f",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({
          hotelsArr: response.data.suggestions[1].entities,
          transportArr: response.data.suggestions[3].entities,
          landmarkArr: response.data.suggestions[2].entities,
        });
        // console.log("123",this.state.landmarkArr)
      })

      .catch(function (error) {
        console.error(error);
      });
  };
  addDetails = (id,name) => {
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/properties/get-details",
      params: {
        id: id,
        checkIn: "2020-01-08",
        checkOut: "2020-01-15",
        adults1: "1",
        currency: "USD",
        locale: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "fe69c4ff72mshe94bf22e4599113p1f56acjsn5d2335d2ea2f",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({
          featuresArr:
            response.data.data.body.overview.overviewSections[0].content,
          setshow: true,
          selName:name,
        });
        console.log("123", this.state.featuresArr);

        console.log("123", this.state.setshow);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  handleClose = () => {
    this.setState({
      setshow: false,
    });
  };

  render() {
    return (
      <div >
        <h1 className="hihotels">Please select one of the matches to see the available Hotels</h1>
       <div className="formHotels">
        <form  className="hoteleform" onSubmit={this.displayMatchDetailsAndHotels} >
          <div className="formdiv">
          <label form="cars" >Choose a Match  </label>
          <select name="cars" id="select">
            {matches.map((match, index) => {
              return (
                <>
                  {/* {console.log(match)} */}
                  <h1> Location: {match.Location}</h1>
                  <option id="dee" value={index}>
                    {match.countries}{" "}
                  </option>
                </>
              );
            })}
          </select>
          </div>
          <br></br>
          <button className="submittform" type="submit">Submit</button>
        </form>
        </div>
        <div id="omar" style={{ display: "none"  }}>
          <div className="city">
          <h2 style={{margin:"30px 15px"}}>City: {matches[this.state.x].Location}</h2>
          </div>
        </div>

         <div id="add" style={{ display: "none" }}>
        <h2 style={{margin:"15px 30px"}}>Hotels:</h2>
        <Row xs={1} md={4} className="g-4" style={{background:"white" ,margin:"10px 1px 10px 30px" ,justifyContent:"initial" }}>
          {this.state.hotelsArr.map((items, idx) => (
            <Col>

            
              <Card style={{borderStyle:"solid" ,boxShadow:"3px 3px " ,borderRadius:"15px" ,background:"#FFC4C4"}}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Text>
                    <p>latitude: {items.latitude}</p>
                    <p>longitude: {items.longitude}</p>
                  </Card.Text>
                  
                  <Card.Text>
                    <button style={{ borderRadius:"6px"}}
                      onClick={() => {
                        this.addDetails(items.destinationId,items.name);
                      }}
                    >
                      {" "}
                      more details
                    </button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
        <div id="del" style={{ display: "none",margin:"30px 30px" ,borderStyle:"solid" ,borderRadius:"15px" ,paddingRight:"30px"}}>
        <h2   style={{ margin:"15px 30px" }}>Land Marks:</h2>
        <Row xs={1} md={4} className="g-4" style={{background:"white" ,margin:"10px 1px 10px 30px" ,justifyContent:"initial" }}>
          {this.state.landmarkArr.map((items, idx) => (
            <Col>
              <Card style={{borderStyle:"solid" ,boxShadow:"10px 10px " ,borderRadius:"15px" ,background:"#FFC4C4"}}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Text>
                    <p>latitude: {items.latitude}</p>
                    <p>longitude: {items.longitude}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       </div>

        <Hotelsdetail
  setshow={this.state.setshow}
  handleClose={this.handleClose}
  featuresArr={this.state.featuresArr}
  selName={this.state.selName}
/>;
      </div>
      
    );
    
  }
}

export default withAuth0(Hotels);


// {this.state.shows && (
//   <p>
//     {this.state.featuresArr.map((features) => {
//       <p>hi</p>;
//     })}
//   </p>
// )}
// <Hotelsdetail
//   setshow={this.state.setshow}
//   handleClose={this.handleClose}
//   featuresArr={this.state.featuresArr}
// />;