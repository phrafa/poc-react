import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { P, Header as HeaderStyle, Span } from "./Header/Styles";

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Row>
          <Col xs={12}>
            {/* <Nav>
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            </Nav> */}

            <Span>
              <Image src="/logo.svg" />
            </Span>
          </Col>
        </Row>
      </Container>
      
    </HeaderStyle>
  );
};

export default Header;
