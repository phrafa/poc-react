import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Teams from "../components/Teams";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>POC | Home</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={8}>
            <Teams />
          </Col>
          <Col xs={4}>Col 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
