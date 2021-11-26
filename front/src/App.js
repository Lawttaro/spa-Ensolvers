import './App.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useState } from 'react';


function TaskList(){

  return(
    <div>
      <ListGroup  >
        <li>  
          <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
            First checkbox
        </li>
      </ListGroup>
    </div>
    );
 }



function AddTask(){
  const [data, setData] = useState('')

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
  }

  return(
    <form>
      <label>
        Name:
        <input type="text" name="name"  onChange={handleInputChange}  />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
 


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
             <TaskList></TaskList>
            <AddTask></AddTask>
          </Col>
        </Row>
        <Row>
          <Col>
            files of item
          </Col>
        </Row>

      </Container>


    </div>
  );
}

export default App;
