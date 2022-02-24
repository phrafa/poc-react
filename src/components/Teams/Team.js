import { Card, Button, Row, Col } from "react-bootstrap";

const Team = ({data}) => {

    const {thumb, name} = data

    return (
            <Col>
                <Card style={{ width: '170px' }}>
                    <Card.Img variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        
                        <Button variant="primary">U Milhor</Button>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default Team;