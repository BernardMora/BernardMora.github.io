import React, { useState } from "react";
import { Row, Col, Container, Button, Modal, Carousel } from "react-bootstrap";
import "./Projects.css"; // You will define the CSS here
import spaceInvaders from "../assets/img/spaceInvaders/1-space-invaders.png";
import ironWine from "../assets/img/iwc/1-ironwine-system.png";
import dataCapstone from "../assets/img/dataScienceCapstone/1-dashboardd.png";
import cs50 from "../assets/img/cs50/1-home.png";
import delfin from "../assets/img/delfinProject/1-ipc-predicciones.png";
import optimizationAlg from "../assets/img/optimizationAlgorithms/1-lm-dataset1.png";
import geneticAlg from "../assets/img/geneticAlgorithm/1-genetic-shortest-path.png";
import backtracking from "../assets/img/knightBacktracking/1-tablero-vacio.png";
import javaFlashcardImage from "../assets/img/javaFlashcards/1-flashcards.png";

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
    linkWord: "Private",
    details:
      "Designed with Figma and Uizard. Frontend: NodeJS, React, Bootrstrap, TailwindCSS. Backend: Flask, Python OOP. Database: PostgreSQL. Deployment: Ubuntu Cloud Server (Vultr), Contenerized with Docker, HTTPS protocol with Nginx.",
  };

  const dataScienceCapstoneImages = importAll(
    require.context(
      "../assets/img/dataScienceCapstone",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const dataScienceCapstoneProject = {
    title: "SpaceX Launch Data Analysis",
    description:
      "Project involving the whole data science process for SpaceX Launch Data. Involving data collection, cleaning, analysis, visualization, and prediction.",
    coverImage: dataCapstone,
    images: Object.values(dataScienceCapstoneImages),
    linkWord: "Found Here",
    details:
      "Data Collection, Data Cleaning, Data Analysis, Data Visualization, Model Building and Prediction. Python. Comprehensive report included.",
    link: "https://github.com/BernardMora/Applied-Data-Science-Capstone/tree/main",
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
    linkWord: "Private",
    details:
      "Used Long-Short Term Memory Neural Network to predict the Mexican Stock Market with chaotic behavior. Used Tensorflow for model building and different hyperparameter options to see the best results. Aplied a post-prediction algorithm for the data which improves the similarity of the predicted data with the real data.",
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
    details:
      "Trained LSTM Neural Network with Tensorflow to predict the stock prices of Apple, Tesla, Google, and Microsoft. Made with Python OOP.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/tech-companies-stock-prices-prediction",
  };

  const optimizationAlgorithmsImages = importAll(
    require.context(
      "../assets/img/optimizationAlgorithms",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const optimizationAlgorithms = {
    title:
      "Design for Multivariate Polynomial Regression and Optimization Algorithms from scratch",
    description:
      "Implemented model architecture, loss function, and learning method from scratch. Adaptative Gradient Descent, and Levenberg-Marquardt optimization algorithms.",
    coverImage: optimizationAlg,
    images: Object.values(optimizationAlgorithmsImages),
    details:
      "Implemented Multivariate Polynomial Regression and classification models from scratch. Implemented Adaptative Gradient Descent and Levenberg-Marquardt optimization algorithms, regulatization, evaluation metrics for both models, prediction data visualization. Made with Python OOP.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/multivariate-polynomial-models-with-training",
  };

  const spaceInvadersImages = importAll(
    require.context("../assets/img/spaceInvaders", false, /\.(png|jpe?g|svg)$/)
  );
  const spaceInvadersProject = {
    title: "Space Invaders Game",
    description: "Two player space invaders videogame. Made using SDL2, C++.",
    coverImage: spaceInvaders,
    images: Object.values(spaceInvadersImages),
    details:
      "Implemented Colissions, Movements, and Game Logic. Two player mode. Made with SDL2 and C++.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/space-invaders-game",
  };

  const geneticAlgorithmImages = importAll(
    require.context(
      "../assets/img/geneticAlgorithm",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const geneticAlgortihm = {
    title: "Genetic Algorithm for shortest path",
    description:
      "Implementation of genetic algorithm fitted for finding shortest path with python from scratch.",
    coverImage: geneticAlg,
    images: Object.values(geneticAlgorithmImages),
    details:
      "Genetic Algoritm with mutation, crossover, and selection. Mechanisms adapted to this specific problem. Implemented from scratch with Python OOP.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/genetic-algorithm-shortest-path.git",
  };

  const backtrackingImages = importAll(
    require.context(
      "../assets/img/knightBacktracking",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const knightBacktracking = {
    title: "Chess Knight With Backtracking Algorithm",
    description:
      "Implemented backtracking algorithm to visit all the chess board with a knight without visiting the same square twice.",
    coverImage: backtracking,
    images: Object.values(backtrackingImages),
    details:
      "Starting at the first square of the board and based on the valid squares that a knight can go to, it will find a path that visits all squares, and if found an invalid path, backtrack to the previous square.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/knight-backtracking",
  };

  const javaFlashcardsImages = importAll(
    require.context("../assets/img/javaFlashcards", false, /\.(png|jpe?g|svg)$/)
  );
  const javaFlashcards = {
    title: "Flashcards Notetaking Application with Java",
    description:
      "Project done for Java class, implemented study flashcards app.",
    coverImage: javaFlashcardImage,
    images: Object.values(javaFlashcardsImages),
    details:
      "100% Java OOP. Swing for GUI. Data read and stored in text files.",
    linkWord: "Found Here",
    link: "https://github.com/BernardMora/javaFlashcard-App",
  };

  const projects = [
    iwcProject,
    dataScienceCapstoneProject,
    delfinProject,
    cs50Project,
    optimizationAlgorithms,
    spaceInvadersProject,
    geneticAlgortihm,
    knightBacktracking,
    javaFlashcards,
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
                <a href={selectedProject.link}>{selectedProject.linkWord}</a>
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
