import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import javaIcon from "../assets/img/java.png";
import usFlag from "../assets/img/us-flag.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css"; // Custom CSS for animations

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState({});
  const sectionRef = useRef(null);

  const programmingLanguages = [
    {
      name: "Python",
      link: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "HTML",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "C",
      link: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "JavaScript",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "C++",
      link: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      name: "CSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "Java",
      link: javaIcon,
    },
  ];

  const pythonStack = [
    {
      name: "Flask",
      link: "https://static-00.iconduck.com/assets.00/flask-icon-512x457-6kb3egvs.png",
    },
    {
      name: "NumPy",
      link: "https://static-00.iconduck.com/assets.00/file-type-numpy-icon-1901x2048-oulkqypt.png",
    },
    {
      name: "Pandas",
      link: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg",
    },
    {
      name: "Matplotlib",
      link: "https://seeklogo.com/images/M/matplotlib-logo-7676870AC0-seeklogo.com.png",
    },
    {
      name: "Seaborn",
      link: "https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png",
    },
    {
      name: "scikit-learn",
      link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "TensorFlow",
      link: "https://seeklogo.com/images/T/tensorflow-logo-C69AEAC9D0-seeklogo.com.png",
    },
    {
      name: "PyTorch",
      link: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    },
  ];

  const databases = [
    {
      name: "MySQL",
      link: "https://logowik.com/content/uploads/images/mysql8604.logowik.com.webp",
    },
    {
      name: "PostgreSQL",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z-zIkPiGVxNEYZERKm_9zXbFtrgREO7LTA&s",
    },
  ];

  const skills = [
    {
      name: "GitHub",
      link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      name: "React",
      link: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      name: "Linux",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJw7yIuraCY1v7LyKd4JaGmrrYBy6dSuJJQ&s",
    },
    {
      name: "Docker",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1eq8Zy2i7JrVgID_DJF8tH9bOD_vPgcr7g&s",
    },
    {
      name: "Bootstrap",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s",
    },
    {
      name: "Tailwind",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
    },
  ];

  const languages = [
    {
      name: "Spanish: Native",
      link: "https://images.emojiterra.com/twitter/v14.0/512px/1f1f2-1f1fd.png",
    },
    {
      name: "English: Advanced",
      link: usFlag,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll(".skill-item").forEach((skillItem) => {
        observer.observe(skillItem);
      });
    }

    return () => {
      if (section) {
        section.querySelectorAll(".skill-item").forEach((skillItem) => {
          observer.unobserve(skillItem);
        });
      }
    };
  }, []);

  const renderSkills = (skillsArray, category) => {
    return skillsArray.map((skill, index) => (
      <Col
        key={index}
        sm={6}
        md={3}
        className="mb-4 d-flex justify-content-center"
      >
        <div
          id={`${category}-${index}`}
          className={`skill-item ${
            visibleSkills[`${category}-${index}`] ? "popping" : ""
          }`}
        >
          <img src={skill.link} alt={skill.name} className="skill-image" />
          <div className="skill-label">{skill.name}</div>
        </div>
      </Col>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <h2 className="text-center text-3xl font-bold mb-10">Skills</h2>
      <Container>
        <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
        <Row>{renderSkills(programmingLanguages, "programmingLanguages")}</Row>

        <h3 className="text-2xl font-bold mb-4">Python Stack</h3>
        <Row>{renderSkills(pythonStack, "pythonStack")}</Row>

        <h3 className="text-2xl font-bold mb-4">Databases</h3>
        <Row>{renderSkills(databases, "databases")}</Row>

        <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
        <Row>{renderSkills(skills, "skills")}</Row>

        <h3 className="text-2xl font-bold mb-4">Languages</h3>
        <Row>{renderSkills(languages, "languages")}</Row>
      </Container>
    </section>
  );
}

export default Skills;
