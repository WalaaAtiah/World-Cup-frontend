import React from "react";
import { Button, Modal } from "react-bootstrap";
class Hotelsdetail extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.setshow} onHide={this.props.handleClose}>
          {console.log("inside model")}
          <Modal.Header closeButton>
            <Modal.Title
              style={{ color: "black", fontSize: "2rem", fontweight: "bold" }}
            >
              {" "}
              {this.props.selName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Features</h2>
            <ul>
              {this.props.featuresArr.map((items, idx) => (
                <li>{items}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Hotelsdetail;
