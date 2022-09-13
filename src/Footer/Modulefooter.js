import React from "react";
import { Button, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Modulefooter extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.setshow} onHide={this.props.handleClose} stayle={{innerHeight:"100%"}} >
          <div>
          <Modal.Header closeButton>
            <Modal.Title
              style={{ color: "#300813", fontSize: "1.5rem", fontweight: "bold"   }}
            >
              {this.props.selBeast.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card
              style={{
                width: "25rem",
                borderBlockStyle: "solid",
                borderWidth: "5px",
                
                margin: "10px",
                borderRadius: "20px",
                backgroundColor: "#edede3",
                
              }}
            >
              
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={this.props.selBeast.image}
                  alt="image"
                  title={this.props.selBeast.name}
                  style={{ width:"20rem", height:"20rem" }}
                />
                <Card.Text  >
                  <ul>
                  <li style={{ fontSize: "1.2rem",color:"#8a1538" ,fontStyle:"bolde" }}>
                    {" "}
                    Capacity : {this.props.selBeast.Capacity}
                  </li>
                  <li style={{ fontSize: "1.2rem",color:"#8a1538" }}>
                    Designed by :{this.props.selBeast.Designed_by}
                  </li>
                  <li style={{ fontSize: "1.2rem" ,color:"#8a1538"}}>
                    location :{this.props.selBeast.location}
                  </li>

                  <li style={{ fontSize: "1.2rem",color:"#8a1538" }}>
                  First_Match :{this.props.selBeast.First_Match}
                  </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default Modulefooter;
