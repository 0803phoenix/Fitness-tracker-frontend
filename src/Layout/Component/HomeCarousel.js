import React from "react";
import Carousel from "react-bootstrap/Carousel";
function HomeCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ filter: "brightness(60%)" }}
            src="https://source.unsplash.com/1400x500/?gym, exercise"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Activity Goals To Improve Health</h3>
            <p>Being active is important to our health,
              but how do you track or monitor your daily activities?
              Fitness Tracker makes it easy to monitor your progress
              and track your activity right from your smartphone!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ filter: "brightness(60%)" }}
            src="https://source.unsplash.com/1400x500/?gym diet"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Put your diet on autopilot</h3>
            <p>Fitness Tracker creates personalized meal plans based on your food preferences,
              budget, and schedule. Reach your diet and nutritional goals with our
              calorie calculator, weekly meal plans, grocery lists and more.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ filter: "brightness(60%)" }}
            src="https://source.unsplash.com/1400x500/?yoga, food"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Reaching your fitness goals has never been so easier!</h3>
            <p>
              Looking to set fitness goals and planning for a weight loss program?
              Use Fitness Tracker Exercise - Fitness Calculator to determine your fitness
              level and learn more about how greater physical fitness contributes to greater
              overall health benefits.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCarousel;
