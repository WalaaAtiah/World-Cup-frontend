import React from "react";
import { Card, Row } from "react-bootstrap";
import Group from "../groupSlides/gruopSlides";
class Groups extends React.Component {


  render() {

    return (
      <Row xs={1} md={4} className="g-4">
        {this.props.groups.map((group) => {
          return (
            <Card>
              <Card.Title>{group.groupName}</Card.Title>
              <Card.Body>
                <Group 
                slide={group.Group}
                />
              </Card.Body>
              

              
            </Card>
          );
        })}
      </Row>
    );
  }
}

export default Groups;
