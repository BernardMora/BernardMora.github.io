import React, { useState, useEffect, useRef } from "react";
import { Stack, Container, Row, Col, Carousel } from "react-bootstrap";
import requirementIcon from "../assets/img/requirements.png";
import analysisIcon from "../assets/img/analysis.png";
import designIcon from "../assets/img/design.png";
import developmentIcon from "../assets/img/development.png";
import testingIcon from "../assets/img/testing.png";
import deploymentIcon from "../assets/img/deployment.png";
import maintenanceIcon from "../assets/img/maintenance.png";
import javaIcon from "../assets/img/java.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css"; // Custom CSS for animations

function Skills() {
  const images = [
    { src: requirementIcon, label: "Requirements" },
    { src: analysisIcon, label: "Analysis" },
    { src: designIcon, label: "Design" },
    { src: developmentIcon, label: "Development" },
    { src: testingIcon, label: "Testing" },
    { src: deploymentIcon, label: "Deployment" },
    { src: maintenanceIcon, label: "Maintenance" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedProficiency, setAnimatedProficiency] = useState([]);

  const programmingLanguages = [
    {
      name: "Python",
      proficiency: 85,
      link: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "HTML",
      proficiency: 50,
      link: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "C",
      proficiency: 70,
      link: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "JavaScript",
      proficiency: 65,
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "C++",
      proficiency: 50,
      link: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      name: "CSS",
      proficiency: 30,
      link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "Java",
      proficiency: 70,
      link: javaIcon,
    },
  ];

  const pythonStack = [
    {
      name: "Flask",
      proficiency: 65,
      link: "https://static-00.iconduck.com/assets.00/flask-icon-512x457-6kb3egvs.png",
    },
    {
      name: "NumPy",
      proficiency: 85,
      link: "https://static-00.iconduck.com/assets.00/file-type-numpy-icon-1901x2048-oulkqypt.png",
    },
    {
      name: "Pandas",
      proficiency: 80,
      link: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg",
    },
    {
      name: "Matplotlib",
      proficiency: 60,
      link: "https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png",
    },
    {
      name: "Seaborn",
      proficiency: 40,
      link: "https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png",
    },
    {
      name: "scikit-learn",
      proficiency: 75,
      link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "TensorFlow",
      proficiency: 70,
      link: "https://seeklogo.com/images/T/tensorflow-logo-C69AEAC9D0-seeklogo.com.png",
    },
    {
      name: "PyTorch",
      proficiency: 60,
      link: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    },
  ];

  const databases = [
    {
      name: "MySQL",
      proficiency: 65,
      link: "https://logowik.com/content/uploads/images/mysql8604.logowik.com.webp",
    },
    {
      name: "PostgreSQL",
      proficiency: 80,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z-zIkPiGVxNEYZERKm_9zXbFtrgREO7LTA&s",
    },
  ];

  const skills = [
    {
      name: "GitHub",
      proficiency: 70,
      link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      name: "React",
      proficiency: 60,
      link: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      name: "Linux",
      proficiency: 40,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJw7yIuraCY1v7LyKd4JaGmrrYBy6dSuJJQ&s",
    },
    {
      name: "Docker",
      proficiency: 50,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1eq8Zy2i7JrVgID_DJF8tH9bOD_vPgcr7g&s",
    },
    {
      name: "Bootstrap",
      proficiency: 60,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s",
    },
    {
      name: "Tailwind",
      proficiency: 50,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
    },
  ];

  const languages = [
    {
      name: "Spanish: Native",
      proficiency: 100,
      link: "https://images.emojiterra.com/twitter/v14.0/512px/1f1f2-1f1fd.png",
    },
    {
      name: "English: Advanced",
      proficiency: 80,
      link: "https://m.media-amazon.com/images/I/51XSXMvcp0L._AC_UF894,1000_QL80_.jpg",
    },
  ];

  const allSkills = [
    ...programmingLanguages,
    ...pythonStack,
    ...databases,
    ...skills,
    ...languages,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { name, proficiency } = entry.target.dataset;
            setAnimatedProficiency((prev) => [
              ...prev,
              { name, proficiency: parseInt(proficiency, 10) },
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".progress-bar");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimatedProficiency = (name) => {
    const skill = animatedProficiency.find((item) => item.name === name);
    return skill ? skill.proficiency : 0;
  };

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10">Skills</h2>

      <Container>
        <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
        <Row>
          {programmingLanguages.map((lang, index) => (
            <Col key={index} md={6} className="mb-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <div className="image-container">
                  <img src={lang.link} alt={lang.name} className="w-8 h-8" />
                  <div className="label-on-hover">{lang.name}</div>
                </div>
                <div className="progress-container flex-grow-1 ms-3">
                  <div
                    className="progress-bar"
                    data-name={lang.name}
                    data-proficiency={lang.proficiency}
                    style={{ width: `${getAnimatedProficiency(lang.name)}%` }}
                  ></div>
                </div>
              </Stack>
            </Col>
          ))}
        </Row>

        <h3 className="text-2xl font-bold mb-4">Python Stack</h3>
        <Row>
          {pythonStack.map((pythonSkill, index) => (
            <Col key={index} md={6} className="mb-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <div className="image-container">
                  <img
                    src={pythonSkill.link}
                    alt={pythonSkill.name}
                    className="w-8 h-8"
                  />
                  <div className="label-on-hover">{pythonSkill.name}</div>
                </div>
                <div className="progress-container flex-grow-1 ms-3">
                  <div
                    className="progress-bar"
                    data-name={pythonSkill.name}
                    data-proficiency={pythonSkill.proficiency}
                    style={{
                      width: `${getAnimatedProficiency(pythonSkill.name)}%`,
                    }}
                  ></div>
                </div>
              </Stack>
            </Col>
          ))}
        </Row>

        <h3 className="text-2xl font-bold mb-4">Databases</h3>
        <Row>
          {databases.map((db, index) => (
            <Col key={index} md={6} className="mb-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <div className="image-container">
                  <img src={db.link} alt={db.name} className="w-8 h-8" />
                  <div className="label-on-hover">{db.name}</div>
                </div>{" "}
                <div className="progress-container flex-grow-1 ms-3">
                  <div
                    className="progress-bar"
                    data-name={db.name}
                    data-proficiency={db.proficiency}
                    style={{ width: `${getAnimatedProficiency(db.name)}%` }}
                  ></div>
                </div>
              </Stack>
            </Col>
          ))}
        </Row>

        <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} md={6} className="mb-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <div className="image-container">
                  <img src={skill.link} alt={skill.name} className="w-8 h-8" />
                  <div className="label-on-hover">{skill.name}</div>
                </div>{" "}
                <div className="progress-container flex-grow-1 ms-3">
                  <div
                    className="progress-bar"
                    data-name={skill.name}
                    data-proficiency={skill.proficiency}
                    style={{ width: `${getAnimatedProficiency(skill.name)}%` }}
                  ></div>
                </div>
              </Stack>
            </Col>
          ))}
        </Row>

        <h3 className="text-2xl font-bold mb-4">Languages</h3>
        <Row>
          {languages.map((lang, index) => (
            <Col key={index} md={6} className="mb-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="align-items-center"
              >
                <h5 className="progress-text mb-0">{lang.name}</h5>
                <div className="image-container">
                  <img src={lang.link} alt={lang.name} className="w-16 h-8" />
                </div>{" "}
                <div className="progress-container flex-grow-1 ms-3">
                  <div
                    className="progress-bar"
                    data-name={lang.name}
                    data-proficiency={lang.proficiency}
                    style={{ width: `${getAnimatedProficiency(lang.name)}%` }}
                  ></div>
                </div>
              </Stack>
            </Col>
          ))}
        </Row>
      </Container>
      {/* May implement later */}
      {/* <Container>
        <div className="text-black text-center py-5">
          <span>
            A Software Engineer may not be specialized in all languages or frameworks...
            <br />
            But knows and is comfortable with:
          </span>
        </div>
        <Carousel
          fade={true}
          slide={true}
          activeIndex={currentIndex}
          onSelect={handleSelect}
          interval={4000}
          className="text-dark rounded"
          controls={true}
        >
          {images.map((image, index) => (
            <Carousel.Item className="" key={index}>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{image.label}</h3>
                <img
                  className="d-block w-100 img-fluid"
                  src={image.src}
                  alt={image.label}
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <span>
            And should be able to learn any
            <br />
            But knows and is comfortable with:
          </span>
      </Container> */}

    </section>
  );
}

export default Skills;
