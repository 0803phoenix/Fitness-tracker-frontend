import React, { Component } from "react";
import NavBar from "./../Layout/Component/NavBar";
import Footer from "./../Layout/Component/Footer";
import Card from "react-bootstrap/Card";
import ReactCardFlip from "react-card-flip";
import NavBarLogout from "../Layout/Component/NavBarLogout";

class About extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        {sessionStorage.getItem('currentUser')==null?<NavBar />:<NavBarLogout/>}
        <div
          className="p-5"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1400x500/?nutrition)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
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

          <Card
            // style={{ width: "100%" }}
            className=" text-dark my-md-5 mx-md-5"
          >
            <Card.Img
              src="https://i.pinimg.com/564x/f4/ec/46/f4ec463a4169ce72a3c6ff28e2af8f23.jpg"
              alt="Card image"
              height="300"
            />
            <Card.ImgOverlay>
              <Card.Text className="">
                <h2 className="display-4">Why use Fitness Tracker?</h2>
                <br />
                As you age, it’s important to protect your bones, joints, and
                muscles – they support your body and help you move. Keeping
                bones, joints, and muscles healthy can help ensure that you’re
                able to do your daily activities and be physically active. As
                you age, it’s important to protect your bones, joints, and
                muscles – they support your body and help you move. Keeping
                bones, joints, and muscles healthy can help ensure that you’re
                able to do your daily activities and be physically active.
              </Card.Text>
              <Card.Text className="px-md-5"></Card.Text>
            </Card.ImgOverlay>
          </Card>

          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="horizontal"
          >
            <frontContainer>
              <Card
                onClick={this.handleClick}
                className=" text-dark my-md-5 mx-md-5"
              >
                <Card.Img
                  src="https://t4.ftcdn.net/jpg/01/28/10/83/360_F_128108370_hfp3ZKkBdPHhPPKLy5QEm0hmyXiRASSh.jpg"
                  alt="Card image"
                  height="300"
                />
                <Card.ImgOverlay>
                  <Card.Text className="">
                    <h2 className="display-4 p-5">
                      Want to connect to us or reach us?
                    </h2>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </frontContainer>

            <backContainer>
              <Card className=" text-dark my-md-5 mx-md-5">
                <Card.Img
                  src="https://t4.ftcdn.net/jpg/01/28/10/83/360_F_128108370_hfp3ZKkBdPHhPPKLy5QEm0hmyXiRASSh.jpg"
                  alt="Card image"
                  height="300"
                />
                <Card.ImgOverlay>
                  <Card.Text className="">
                    <a href="https://google.com">
                      <img
                        className="m-5"
                        src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
                        height="50"
                      />
                    </a>
                    <a href="https://google.com">
                      <img
                        className="m-5"
                        src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                        height="60"
                      />
                    </a>
                    <a href="https://google.com">
                      <img
                        className="m-5"
                        src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                        height="50"
                      />
                    </a>
                    <a href="https://google.com">
                      <img
                        className="m-5"
                        src="https://pngimg.com/uploads/twitter/twitter_PNG1.png"
                        height="50"
                      />
                    </a>
                    <br />
                    <button
                      // onclick
                      type="button"
                      className="btn btn-outline-dark"
                    >
                      Directly reach us!
                    </button>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </backContainer>
          </ReactCardFlip>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
