import { Row } from "react-bootstrap"
import TimesObj from "../times.json"
import Team from "./Teams/Team"

const Teams = () => {
    
    return (
        <Row xs={3} md={3} className="g-4">
            {TimesObj.map( (t) => <Team data={t} />)}
        </Row>
    )
}

export default Teams;