import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import nnIcon from "../assets/img/neural-newtork.png";
import softwareIcon from "../assets/img/software.png";
import orbitIcon from "../assets/img/orbit.png";
import philosophyIcon from "../assets/img/philosophy.png";

function About() {
  // Increase the threshold value to 0.5 to make the icons appear when they are more centered in the viewport
  const options = { triggerOnce: true, threshold: 0.5 };

  const [nnRef, nnInView] = useInView(options);
  const [orbitRef, orbitInView] = useInView(options);
  const [philosophyRef, philosophyInView] = useInView(options);
  const [softwareRef, softwareInView] = useInView(options);

  return (
    <section className="bg-white text-black py-20 pt-28 pb-14">
      <Container>
        <h2 className="text-3xl font-bold">Who am I?</h2>

        <Row>
          <Col className="" md={8}>
            <div className="pr-5 text-left">
              <p className="mt-4">
                I’m a Mexican 20 year old, currently in the 7th semester of my
                Software Engineer career. I am a{" "}
                <span className="font-bold">creative</span>,{" "}
                <span className="font-bold">flexible</span>,{" "}
                <span className="font-bold">disciplined</span>,
                <span className="font-bold"> problem solver </span> and{" "}
                <span className="font-bold">critical person</span>, always
                looking for ways to be better in what I do, with myself, and
                with others.
                <br />I consider myself very capable, but I also know there is a
                whole world out there, in which there are really incredible
                people from whom I can obtain a lot of knowledge, wisdom and
                experiences. I always try to have{" "}
                <span className="font-bold">critical thinking</span>, with
                pretty much everything that I do, and with myself too.
                <br />
                For me, everyday could be a new opportunity. I think that, in
                one way or another and in some aspect of life, opportunities
                always come, and I try to be wise enough to acknowledge and take
                those opportunities if they’re good, but I’m also always trying
                to <span className="font-bold">create new opportunities</span>.
                I’m quite interested in a lot of topics, from science, human
                personal and social behavior, humanities, economics and even
                politics. But I’m particularly passionate about technology, AI,
                physics (our understanding of reality), and philosophy.
              </p>
            </div>
          </Col>
          <Col className="pl-5" md={4}>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <img
                ref={nnRef}
                src={nnIcon}
                className={`inset-0 transform transition duration-1000 ${
                  nnInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
              <img
                ref={orbitRef}
                src={orbitIcon}
                className={`inset-0 transform transition duration-1000 ${
                  orbitInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
              <img
                ref={philosophyRef}
                src={philosophyIcon}
                className={`inset-0 transform transition duration-1000 ${
                  philosophyInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
              <img
                ref={softwareRef}
                src={softwareIcon}
                className={`inset-0 transform transition duration-1000 ${
                  softwareInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
