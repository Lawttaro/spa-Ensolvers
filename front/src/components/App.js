import './App.css';
import Task from './Task';
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
      </Container>
    </div>
  );
}

export default App;

