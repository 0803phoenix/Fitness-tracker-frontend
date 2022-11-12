import React, { Component } from "react";
import GetActivity from "./GetActivity";
import AddActivity from "./AddActivity";
import Footer from "../../Layout/Component/Footer";
import NavBar from "../../Layout/Component/NavBar";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

class ActivityMain extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Card.CardGroup>
          <Card>
            <Card.CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <Card.CardBody>
              <Card.CardTitle tag="h5">Card title</Card.CardTitle>

              <Card.CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.CardText>
              <Button>Button</Button>
            </Card.CardBody>
          </Card>
          <Card>
            <Card.CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <Card.CardBody>
              <Card.CardTitle tag="h5">Card title</Card.CardTitle>

              <Card.CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.CardText>
              <Button>Button</Button>
            </Card.CardBody>
          </Card>
        </Card.CardGroup>

        <Footer />
      </div>
    );
  }
}

export default ActivityMain;
