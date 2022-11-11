import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import NavBar from "../../Layout/Component/NavBar";
import Footer from "./../../Layout/Component/Footer";

class AddActivity extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />

        <Card className=" text-dark my-md-5 mx-md-5">
          <Card.Img
            src="https://t3.ftcdn.net/jpg/02/82/71/12/360_F_282711281_WGbatL1zECbAkMFQJUYcjiJ6bzORQ4kn.jpg"
            alt="Card image"
            className="rounded"
            height="250"
          />
          <Card.ImgOverlay>
            <Card.Text className="">
              <h2 className="display-4">Who are we?</h2>
              <br />
              We are a group of engineers working together to help people
              achiece their fitness goals. Out team members are highly
              experienced and strive to provide seamless services to our app
              users.
            </Card.Text>
            <Card.Text className="px-md-5"></Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default AddActivity;
