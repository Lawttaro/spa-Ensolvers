import './App.css';
import Task from './Task';
import Folders from './Fold';
import { Container, Row, Col } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Task></Task>
          </Col>
        </Row>
        <Row className="row-spx">

        </Row>
        <Row>
          <Col>
            <Folders></Folders>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

