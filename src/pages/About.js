import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>POC | About</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12}>sobre</Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
