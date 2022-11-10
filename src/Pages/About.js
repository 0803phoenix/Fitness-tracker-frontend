import React, { Component } from "react";
import NavBar from "./../Layout/Component/NavBar";
import Footer from "./../Layout/Component/Footer";
import Card from "react-bootstrap/Card";
import ReactCardFlip from "react-card-flip";

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
    const myStyle = {
      // backgroundImage:
      //   "url('https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg')",
      fontSize: "20px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <>
      <NavBar />
      <div style={myStyle}>
        <Card
          text={"light"}
          // style={{ width: "100%" }}
          className=" text-white p-5 "
        >
          <Card.Img src="https://picsum.photos/1200/300" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text className="px-md-5 py-md-5">
              <h2>Who are we?</h2>A content marketing strategy is a roadmap that
              not only tells you what you're going to create, but how you're
              going to create it, distribute it, and ultimately use it to
              attract, retain, and convert readers and viewers into customers.
              Each part of your content marketing has its own unique nuances and
              details that you won't want to miss. So, let's look at each part
              of the process and for an even deeper dive on how I personally do
              content marketing for companies like LinkedIn, Google, Zendesk,
              Quickbooks, Adobe and more, check out my guide to creating a
              content marketing strategy.
            </Card.Text>
            <Card.Text className="px-md-5"></Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card
          text={"light"}
          // style={{ width: "100%" }}
          className=" text-white p-5"
        >
          <Card.Img src="https://picsum.photos/1200/300" alt="Card image"/>
          <Card.ImgOverlay>
            <Card.Text className="px-md-5 py-md-5">
              <h2>Why use Fitness Tracker?</h2>
              As you age, it’s important to protect your bones, joints, and
              muscles – they support your body and help you move. Keeping bones,
              joints, and muscles healthy can help ensure that you’re able to do
              your daily activities and be physically active. As you age, it’s
              important to protect your bones, joints, and muscles – they
              support your body and help you move. Keeping bones, joints, and
              muscles healthy can help ensure that you’re able to do your daily
              activities and be physically active.
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
              text={"light"}
              // style={{ width: "70%" }}
              className=" text-white p-5"
            >
              <Card.Img src="https://picsum.photos/1200/300" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text className="px-md-5 py-md-5">
                  <h3>Want to know more about us or reach us?</h3>
                </Card.Text>
                <Card.Text className="px-md-5"></Card.Text>
                <img
                  src="./images/arrow.png"
                  alt="arrow.png"
                  onClick={this.handleClick}
                >
                  {/* <button onClick={this.handleClick}></button> */}
                </img>
              </Card.ImgOverlay>
            </Card>
          </frontContainer>

          <backContainer>
            <Card
              text={"light"}
              // style={{ width: "70%" }}
              className=" text-white p-5 "
            >
              <Card.Img src="https://picsum.photos/1200/300" alt="Card image"  />
              <Card.ImgOverlay>
                <Card.Text className="px-md-5 py-md-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet. Sed elementum tempus egestas sed
                  sed. Id cursus metus aliquam eleifend mi in nulla posuere
                  sollicitudin. Semper eget duis at tellus at.
                </Card.Text>
                <Card.Text className="px-md-5"></Card.Text>
                <img
                  src="./images/arrow.png"
                  alt="arrow.png"
                  onClick={this.handleClick}
                >
                  {/* <button onClick={this.handleClick}></button> */}
                </img>
              </Card.ImgOverlay>
            </Card>
          </backContainer>
        </ReactCardFlip>

        <Footer />
      </div>
     </> 
    );
  }
}

export default About;
