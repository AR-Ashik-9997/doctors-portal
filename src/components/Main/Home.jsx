import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import InfoCard from "./InfoCard";
import ServiceCard from "./ServiceCard";
const Home = () => {
  const [info, setInfo] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/info")
      .then((response) => response.json())
      .then((data) => setInfo(data));
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Container>
        <section className="margin-top">
          <Row className="d-flex flex-column-reverse flex-lg-row">
            <Col lg={6} md={12} sm={12}>
              <h1 className="display-3 mt-5">Your New Smile Starts Here</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <Button className="primary-color btn-lg">GET STARTED</Button>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <img
                src="https://i.postimg.cc/kGK6stBt/chair.png"
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </section>
        <section className="margin-top mb-5">
          <Row>
            {info.map((item) => (
              <InfoCard data={item} key={item._id} />
            ))}
          </Row>
        </section>
        <section className="margin-top">
          <Row>
            <h4 className="text-center text-color">OUR SERVICES</h4>
            <h1 className="text-center">Services We Provide</h1>
            {services.map((services) => (
              <ServiceCard data={services} key={services._id} />
            ))}
          </Row>
        </section>
        <section className="margin-top">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div>
                <img
                  src="https://i.postimg.cc/3Ry4tzP0/treatment.png"
                  alt=""
                  className="img-fluid terms-image"
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="margin-top">
                <h1>Exceptional Dental Care, on Your Terms</h1>
                <p className="text-justify p-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </p>
                <Button className="primary-color btn-lg">GET STARTED</Button>
              </div>
            </Col>
          </Row>
        </section>
        <section className="margin-top bg-black">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="d-lg-block d-none">
                <img
                  src="https://i.postimg.cc/cJqt2hG5/doctor-small.png"
                  alt=""
                  className="img-fluid nagetive-image"
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="margin-top ps-4 pe-5 mb-5">
              <h5 className="text-color">Appointment</h5>
                <h1 className="text-white">Make an appointment Today</h1>
                <p className="text-justify text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </p>
                <Button className="primary-color btn-lg">GET STARTED</Button>
              </div>
            </Col>
          </Row>
        </section>
        {/* <section className="margin-top bg-appointment">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="d-lg-block d-none">
              <img
                src="https://i.postimg.cc/cJqt2hG5/doctor-small.png"
                alt=""
                className="img-fluid nagetive-image"
              />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="margin-top">
                <h5 className="text-color">Appointment</h5>
                <h1 className="text-white">Make an appointment Today</h1>
                <p className="text-justify text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsumis that it has a more-or-less
                  normal distribution of letters,as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page
                </p>
                <Button className="primary-color btn-lg">GET STARTED</Button>
              </div>
            </Col>
          </Row>         
        </section> */}
        <section className="margin-top"></section>
      </Container>
    </>
  );
};

export default Home;
