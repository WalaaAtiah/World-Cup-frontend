import React from "react";
import { Button, Modal } from "react-bootstrap";

class Modulefooter extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.setshow} onHide={this.props.handleClose} stayle={{innerHeight:"100%"}} >
          <div>
          <Modal.Header  closeButton >
            <Modal.Title
              style={{ fontSize: "1.5rem", fontweight: "bold", textAlign:"center"   }}
            >
              <h3  style={{  textAlign:"center"   }}>
              {this.props.selBeast.name}
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign:"center" }} >
            
            
            
                <img
                  variant="top"
                  src={this.props.selBeast.image}
                  alt="image"
                  title={this.props.selBeast.name}
                  style={{ width:"20rem", height:"20rem" ,borderRadius:"15px" ,boxShadow:"2px 2px 1px gray "}}
                />
                <div>
                  
                  <h4 style={{ fontSize: "1.2rem",color:"black" ,fontStyle:"bolde" ,paddingTop:"15px" }}>
                    {" "}
                    Capacity : {this.props.selBeast.Capacity}
                  </h4>
                  <h4 style={{ fontSize: "1.2rem",color:"black" }}>
                    Designed by :{this.props.selBeast.Designed_by}
                  </h4>
                  <h4 style={{ fontSize: "1.2rem" ,color:"black"}}>
                    location :{this.props.selBeast.location}
                  </h4>

                  <h4 style={{ fontSize: "1.2rem",color:"black" }}>
                  First_Match :{this.props.selBeast.First_Match}
                  </h4>
                  
                  </div>
                
            
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
