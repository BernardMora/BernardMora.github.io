import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/img/bernardo.png";
import waveGIF from "../assets/img/wave-hello.gif";

const words = [
  " Software Engineer Student",
  " Software Designer/Dev",
  " UX/UI Designer",
  " Data Analyst and AI Student",
  "n Ever Evolving Person",
];

function Hero() {
  return (
    <section className="bg-black text-white py-20 pt-28 pb-14">
      <Container>
        <Row>
          <Col md={8} className="pr-10">
            <div>
              <h1 className="text-left text-4xl font-bold">
                Hi! I am Bernardo Morales, <br />a
                <Typewriter
                  loop={false}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={3900}
                  cursor={true}
                  cursorBlinking={true}
                  words={words}
                />
              </h1>
            </div>

            <p className="font-medium mt-4">
              Always Learning, Building, and Growing
            </p>
            <p className="text-[#ADB7BE] font-medium italic pt-5 mt-4">
              "Difficulty, struggle and frustration when you're learning
              something are not signs that you've reached your limits, they're
              signs that you're expanding your limits."
            </p>
            <p className="text-[#ADB7BE] font-medium italic mt-4">
              - David Yaeger
            </p>
          </Col>
          <Col md={4}>
            <div className="flex relative justify-center mt-8">
              <img
                src={profileImage}
                alt="Bernardo"
                className="rounded-full w-42 h-42"
              />
              <img src={waveGIF} alt="Typing" className="w-1/4 left-0 top-0 absolute" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
