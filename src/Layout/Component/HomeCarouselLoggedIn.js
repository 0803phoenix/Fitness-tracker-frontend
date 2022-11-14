import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router";

function HomeCarouselLoggedIn() {
  const navigate = useNavigate();
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x500/?gym, exercise"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            <button
              onClick={() => navigate("/activity")}
              class="btn btn-danger mr-1"
            >
              Activity
            </button>
            <button class="btn btn-primary mr-1" onClick={() => navigate("/diet")}>Add Diet </button>
            <button class="btn btn-success mr-1">Get Report</button>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x500/?gym diet"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <button
              onClick={() => navigate("/activity")}
              class="btn btn-danger mr-1"
            >
              Activity
            </button>
            <button class="btn btn-primary mr-1" onClick={() => navigate("/diet")}>Add Diet</button>
            <button class="btn btn-success mr-1">Get Report</button>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x500/?yoga, food"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>

            <button
              onClick={() => navigate("/activity")}
              class="btn btn-danger mr-1"
            >
              Activity
            </button>
            <button class="btn btn-primary mr-1" onClick={() => navigate("/diet")}>Add Diet</button>
            <button class="btn btn-success mr-1">Get Report</button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCarouselLoggedIn;
