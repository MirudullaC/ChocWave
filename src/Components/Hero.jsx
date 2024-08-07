import Carousel from "react-bootstrap/Carousel";
import appleMonitor from "../assets/images/apple-monitor.jpg";
import appleWatch from "../assets/images/apple-watch.jpg";
import headphone from "../assets/images/wireless-headphone.jpg";
import "../Css/Hero.css";

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={appleMonitor}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Apple Monitor</h5>
          <p>
            Apple Monitor is the best monitor in the world, avilable in a
            variety of colors
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={appleWatch}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Apple Watch</h5>
          <p>Apple watches are now avialable in our store</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img" src={headphone} alt="Third slide" />
        <Carousel.Caption>
          <h5>Headphone</h5>
          <p>
            A perfect thrill for your day, a wireless headphone is now
            avialable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
