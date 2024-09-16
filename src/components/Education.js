import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Education.css";

function Education() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const certificates = [
    {
      name: "CS50x Introduction to Computer Science",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/800px-Harvard_University_coat_of_arms.svg.png",
      src: require("../assets/files/CS50x.pdf"),
      description:
        "Introduction to Computer Science's main concepts, covering: Algorithms, Data Structures, C, Python, SQL, Web Development, and more.",
    },
    {
      name: "Data Science Professional Certificate",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      src: require("../assets/files/IBM Data Science.pdf"),
      description:
        "Data Science main topics, covering: Python for Data Science, Data Analysis, Data Visualization, Machine Learning, Databases for Data Science.",
    },
    {
      name: "Qiskit Global Summer School 2023 - Quantum Excellence",
      img: "https://shequantum.org/wp-content/uploads/2021/09/1630904419987.jpg?w=1024",
      src: require("../assets/files/Qiskit Global Summer School.pdf"),
      description:
        "Introduction to Quantum Computing's main concepts and implementation of circuits and algorithms with Qiskit.",
    },
    {
      name: "XXVIII Verano de la Investigación Científica y Tecnológica del Pacífico",
      img: "https://icti.michoacan.gob.mx/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-11-at-10.38.24-AM.jpeg",
      src: require("../assets/files/Constancia_Delfin.pdf"),
      description:
        "(Constancy) Research internship focused on Quantum Computing and LSTM for Mexican Stock Market forecast.",
    },
  ];

  const handleDownload = (src, fileName) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="bg-white text-black py-20">
      <Container>
        <h1 className="text-4xl font-bold text-center pb-5">Education</h1>
        <h1 className="text-4xl font-bold py-5">Institutions</h1>

        <Row xs={1} sm={2} md={3} className="g-4">
          <Col ref={ref1} className={inView1 ? "animate" : ""}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.elsoldetijuana.com.mx/local/sk9h53-uabc.jpeg/ALTERNATES/LANDSCAPE_1140/uabc.jpeg"
                className="card-img-top"
              />
              <Card.Body>
                <Row>
                  <Col xs={8}>
                    <Card.Title>
                      Universidad Autónoma de Baja California (UABC)
                    </Card.Title>
                  </Col>
                  <Col xs={4}>
                    <Card.Img
                      className="pt-2"
                      src="https://static.wixstatic.com/media/d37dc4_5386a03afdd34069a3b43974d6b2a3ce~mv2.png/v1/fill/w_296,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UABC_escudo_SER%20(2).png"
                    />
                  </Col>
                </Row>
                <Card.Text className="pt-2">
                  University where I've studied all the 6 semesters of my
                  career, where I've learned main and fundamental concepts of
                  engineering, and specifically, Software Engineering, from
                  fundamental math concepts, to algorithms, data structures, the
                  software development life cycle and agile methodologies like
                  SCRUM.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col ref={ref2} className={inView2 ? "animate" : ""}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.cic.ipn.mx/images/ciciipn.png"
                className="card-img-top"
              />
              <Card.Body>
                <Row>
                  <Col xs={8}>
                    <Card.Title>
                      Centro de Investigación en Computación del IPN (CIC IPN)
                    </Card.Title>{" "}
                  </Col>
                  <Col xs={4}>
                    <Card.Img
                      className="pt-2"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvGyEQCcszTzdrP28I65msyseh9XLC_8k_Q&s"
                    />
                  </Col>
                </Row>

                <Card.Text className="pt-2">
                  I did a research internship in the summer of 2023 in the CIC
                  IPN, focusing on the learning of Quantum Computing and the
                  training and testing of a Long-Short-Term-Memory Neural
                  Network for the forecast of the Mexican Stock Market as
                  chaotic-labeled data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col ref={ref3} className={inView3 ? "animate" : ""}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://images.shiksha.com/mediadata/images/1536663089phpPs7eTu.jpeg"
                className="card-img-top"
              />
              <Card.Body>
                <Row>
                  <Col xs={7}>
                    <Card.Title>University of Miami (UM)</Card.Title>
                  </Col>
                  <Col xs={4}>
                    <Card.Img
                      className="pt-2"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/1200px-Miami_Hurricanes_logo.svg.png"
                    />
                  </Col>
                </Row>
                <Card.Text className="pt-2">
                  I am currently studying the 7th semester of my Software Engineer
                  degree as an exchange student at UM. 
                  - Software Engineering
                  - Machine Learning
                  - Neural Networks
                  - Algortihms -
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1 className="text-4xl font-bold py-5">Certificates</h1>
        <Row xs={1} md={4} className="g-4">
          {certificates.map((certificate, idx) => (
            <Col key={idx}>
              <Card className="h-100 flex flex-col">
                <div className="h-1/3 flex items-center justify-center">
                  <Card.Img
                    variant="top"
                    src={certificate.img}
                    className="object-contain p-4"
                  />
                </div>
                <div className="h-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <Card.Title>{certificate.name}</Card.Title>
                    <Card.Text>{certificate.description}</Card.Text>
                  </div>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      handleDownload(certificate.src, `${certificate.name}.pdf`)
                    }
                  >
                    View Certificate
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
