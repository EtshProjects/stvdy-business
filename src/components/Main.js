import React from "react";
// import rect from "../SVG/Rectangle 2.svg"
import arrow from "../SVG/Icon awesome-long-arrow-alt-right.svg";
import topLeftSvg from "../images/topleft.PNG";
import topRightSvg from "../images/topright.PNG";
import bottomLeftSvg from "../images/bottomleft.PNG";
import bottomRightSvg from "../images/bottomright.PNG";
import dashboardTwo from "../images/dashboard2.png";
import { Carousel } from "react-responsive-carousel";
import CounterUp from "./CounterUp";
import testImg from "../images/test.png";
import starSvg from "../SVG/star.svg";

export default function Main() {
  return (
    <>
      <div className="container main__section">
        <div className="main__left" data-aos="fade-right" data-aos-duration="1500">
          <div className="dash"></div>
          <h1>
            The best business <br /> solution for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, <br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea{" "}
            <br />
            rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <h5>Learn About Our Success</h5>
          <img src={arrow} alt="Your SVG" />
        </div>
        <div className="main__right" data-aos="fade-up" data-aos-duration="1500">
          <div className="row svg__section">
            <div className="column top__left">
              <img src={topLeftSvg} alt="svg" />
              <h5>Scale Your Activity</h5>
              <div className="dash"></div>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod tempor <br /> invidunt ut labore
              </p>
            </div>
            <div className="column top__right">
              <img src={topRightSvg} alt="svg" />
              <h5>Bootcamps</h5>
              <div className="dash"></div>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod tempor <br /> invidunt ut labore
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column bottom__left">
              <img src={bottomLeftSvg} alt="svg" />
              <h5>Hight Quality</h5>
              <div className="dash"></div>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod tempor <br /> invidunt ut labore
              </p>
            </div>
            <div className="column bottom__right">
              <img src={bottomRightSvg} alt="svg" />
              <h5>Get Certifcation</h5>
              <div className="dash"></div>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod tempor <br /> invidunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__two-section">
        {/* <img src={shapeTwo} alt="shapeTwo" className="shape__two" /> */}
        <div className="rec"></div>
        <img src={dashboardTwo} alt="dashboardTwo" className="dashboard__two" data-aos="flip-left" data-aos-duration="1500"/>
        <div className="dashboard__two-right" data-aos="fade-down-left" data-aos-duration="1500">
          <div className="dash"></div>
          <h1>
            The best business <br /> solution for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, <br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea{" "}
            <br />
            rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <h5>Learn About Our Success</h5>
          <img src={arrow} alt="Your SVG" className="arrow" />
        </div>
      </div>
      <div className="platform__overview">
        <div className="platform__top">
          <h3>Advanced Customer Service Platform</h3>
          <h1>Platform Overview</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod <br /> tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. <br /> At vero eos et accusam et
            justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no
            sea takimata sanctus est <br /> Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="img__slider" data-aos="flip-right" data-aos-duration="1500">
        <Carousel>
          <div>
            <img src={dashboardTwo} alt="slider" />
          </div>
          <div>
            <img src={dashboardTwo} alt="slider" />
          </div>
          <div>
            <img src={dashboardTwo} alt="slider" />
          </div>
        </Carousel>
      </div>
      <div className="dashboard__three-section " >
        <div className="rec"></div>
        <div className="dashboard__three-left" data-aos="fade-up" data-aos-duration="1500">
          <div className="dash"></div>
          <h1>
            The best business <br /> solution for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, <br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea{" "}
            <br />
            rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <h5>Learn About Our Success</h5>
          <img src={arrow} alt="Your SVG" className="arrow" />
        </div>
        <img
          src={dashboardTwo}
          alt="dashboardTwo"
          className="dashboard__three"
          data-aos="fade-left" data-aos-duration="2000"
        />
        {/* <img src={shapeThree} alt="shape3" className="shape__three" /> */}
      </div>
      <div className="acc__process">
        <div className="acc__left" data-aos="fade-right" data-aos-duration="2000">
          <h1>
            The best business <br /> solution for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, <br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea{" "}
            <br />
            rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <button className="acc__button">
            <h4 className="acc__about-us">About us</h4>
          </button>
        </div>
        <div className="acc__right">
          <div className="circles">
            {" "}
            <div className="circle">1</div>
            <div className="vertical__line"></div>
            <div className="circle">1</div>
            <div className="vertical__line"></div>
            <div className="circle">1</div>
          </div>
          <div className="acc__toRight">
            <div className="market__research" data-aos="fade-left" data-aos-duration="1600">
              <h1>Market Research</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                <br /> diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                <br /> magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="market__research" data-aos="fade-right" data-aos-duration="1800">
              <h1>Market Research</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                <br /> diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                <br /> magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="market__research" data-aos="fade-up" data-aos-duration="2000">
              <h1>Market Research</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
                <br /> diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                <br /> magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="center__heading">
        Don't Just Take <br /> our Word for it!
      </h1>
      <CounterUp />
      <div className="grow__business">
        <div className="grow__left">
          <img src={testImg} alt="testimonials" />
          <div className="test__info">
            <h1>Florrie Jacobs</h1>
            <h5>CEO of Company</h5>
            <p>
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr,
              sed <br /> diam nonumy eirmod tempor <br /> invidunt ut labore et
              dolore <br /> magna aliquyam erat
            </p>
            <div className="stars">
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
              <img src={starSvg} alt="" />
            </div>
          </div>
        </div>
        <div className="grow__right">
          {" "}
          <h1>
            The best business <br /> solution for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, <br />
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea{" "}
            <br />
            rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <button className="grow__button">
            <h4 className="grow__about-us">About us</h4>
          </button>
        </div>
      </div>
    </>
  );
}
