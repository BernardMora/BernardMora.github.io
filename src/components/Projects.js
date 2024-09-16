import React, { useState } from "react";
import { Row, Col, Container, Button, Modal, Carousel } from "react-bootstrap";
import "./Projects.css"; // You will define the CSS here
import spaceInvaders from "../assets/img/space-invaders.png";
import ironWine from "../assets/img/iwc/1-ironwine-system.png";
import cs50 from "../assets/img/cs50/1-home.png";
import delfin from "../assets/img/delfinProject/1-ipc-predicciones.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Dynamically import all images from the folder
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  // Import images from the assets/projects folder
  const iwcImages = importAll(
    require.context("../assets/img/iwc", false, /\.(png|jpe?g|svg)$/)
  );
  const iwcProject = {
    title: "IronWine Cellars System",
    description:
      "Webapp System made for managing the business process of the IronWine Cellars company.",
    coverImage: ironWine,
    images: Object.values(iwcImages), // Use imported images as an array
    details:
      "Designed with Figma and Uizard. Developed using React, Python Flask, and PostgreSQL. Deployed on Ubuntu Server using Docker, Nginx for HTTPS protocol.",
  };

  const cs50Images = importAll(
    require.context("../assets/img/cs50", false, /\.(png|jpe?g|svg)$/)
  );
  const cs50Project = {
    title: "Technology Companies Stock Prices Forecast",
    description:
      "CS50s final project. Trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
    coverImage: cs50,
    images: Object.values(cs50Images), // Use imported images as an array
    details: "TODO"
  };

  const delfinImages = importAll(
    require.context("../assets/img/delfinProject", false, /\.(png|jpe?g|svg)$/)
  );

  const delfinProject = {
    title: "Prediction of the Mexican Stock Market",
    description:
      "Project done in research internship to predict Mexican Store Prices.",
    coverImage: delfin,
    images: Object.values(delfinImages),
    details: "TODO"
  };

  const projects = [
    iwcProject,
    cs50Project,
    delfinProject,
    {
      title:
        "Optimization Algorithms for Regression and Classifcation from scratch",
      description:
        "Project done for CS50s final project, trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
      images: "/path-to-image.jpg",
    },
    {
      title: "Space Invaders Game",
      description: "Made using SDL2, C++.",
      images: spaceInvaders,
    },
    {
      title: "Genetic Algorithm for shortest path",
      description:
        "Project done for CS50s final project, trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
      images: "/path-to-image.jpg",
    },
    {
      title: "Chess Knight With Backtracking Algorithm",
      description:
        "Project done for CS50s final project, trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
      images: "/path-to-image.jpg",
    },
    {
      title: "Personalized Local Assistant in Python",
      description:
        "Project done for CS50s final project, trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
      images: "/path-to-image.jpg",
    },
    {
      title: "Notetaking Application with Java",
      description:
        "Project done for CS50s final project, trained an LSTM NN to forecast Apple, Tesla, Google, and Microsoft prices data.",
      images: "/path-to-image.jpg",
    },
  ];

  // Function to handle the "Learn More" button click
  const handleLearnMore = (project) => {
    setSelectedProject(project);
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const handleClose = () => setShowModal(false);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Work</h2>
        <Container className="scrollable-container">
          <Row>
            {projects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <div className="project-card text-left p-4 border rounded shadow">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="img-fluid mb-3"
                  />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => handleLearnMore(project)}
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Modal for displaying project details */}
        <Modal show={showModal} onHide={handleClose} centered>
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Carousel for Project Images */}
                <Carousel>
                  {selectedProject.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100 carousel-fixed-image" // Add custom class here
                        src={image}
                        alt={`Slide ${idx + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.details}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
}

export default Projects;
