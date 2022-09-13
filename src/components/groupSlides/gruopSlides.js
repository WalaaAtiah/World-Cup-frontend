import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { withAuth0 } from "@auth0/auth0-react";
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
    };
  }
  favoriteTeam = (item) => {
    console.log(item.flag);
    this.setState({
      favorite: item.flag,
    });
    console.log(this.state.favorite);
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Carousel className="group">
          {this.props.slide.map((item) => {
            return (
              <Carousel.Item className="teamimg">
                <img
                  className="d-block w-100"
                  src={item.flag}
                  alt={item.country}
                  style={{
                    width: "50px",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                />
                <Carousel.Caption
                  style={{
                    border: "solid 1px rgba(255,255,255,.5)",
                    backgroundColor: "rgba(0,0,0,.5)",
                    borderRadius: "20px",
                  }}
                >
                  <p>{item.id}</p>
                  <p>{item.country}</p>
                  {isAuthenticated && (
                    <button onClick={() => this.favoriteTeam(item)}>⚽</button>
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        {isAuthenticated&&<div>Choose Your Team <img src={this.state.favorite} style={{width:"50px",borderRadius:"50%"}}/></div>}

      </>
    );
  }
}

export default withAuth0(Group);
