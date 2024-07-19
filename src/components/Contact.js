import React, { useState } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import gitHubIcon from "../assets/img/github.png";
import linkedinIcon from "../assets/img/linkedin.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const sendEmail = () => {
    emailjs
      .send("service_qtv4vck", "template_zfagtew", formData, "XOBIiXUxoXbQM0nOn")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
    setShowModal(false);
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <Container>
        <Row className="text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4">
            Feel free to reach me on any of my social media, to{" "}
            <a
              onClick={() => window.open("mailto:berna5869@gmail.com")}
              className="text-blue-400 cursor-pointer"
            >
              berna5869@gmail.com
            </a>
            , or directly in this form and I'll get back to you!
          </p>
        </Row>
        <Row className="mt-5">
          <Col md={8} className="flex items-center">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <input
                    type="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 rounded text-black"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message. Please leave your contact information so I can find you back!"
                    className="w-full p-2 rounded h-32 text-black"
                    value={formData.message}
                    onChange={(e) => handleInputChange(e)}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-2 rounded text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Col>
          <Col md={4} className="flex items-center justify-center">
            <div className="flex justify-around w-full">
              <Button
                onClick={() => window.open("https://github.com/BernardMora")}
                className="p-0 border-0 bg-transparent hover:bg-gray-200 focus:outline-none"
              >
                <img
                  src={gitHubIcon}
                  alt="GitHub Account"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/bernardo-morales-ramos-727159263/"
                  )
                }
                className="p-0 border-0 bg-transparent hover:bg-gray-200 focus:outline-none"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn Account"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to send this message?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Contact;
