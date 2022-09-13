import React from "react";
import { Card, Row,Col } from "react-bootstrap";
import Group from "../groupSlides/gruopSlides";
import "./groups.css"
class Groups extends React.Component {


  render() {

    return (
      <Row xs={1} md={4} className="row">
        {this.props.groups.map((group) => {
          return (
            <Col classNmae="col">
            <Card className="group">
              
              <Card.Title className="groupName">{group.groupName}</Card.Title>
              <Card.Body className="card_body">
                <Group 
                slide={group.Group}
                />
              </Card.Body>
              
            </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Groups;
