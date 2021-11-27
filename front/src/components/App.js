import './App.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'

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
    setData(event.target.value);
  }
  const HandleSubmit = () => {
    
    let url = "http://127.0.0.1:8000/createTask";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: data })
    })

  }
  return(
    <form  >
      <label>
        newTask:
        <input
        type="text"
        value={data}
        onChange={handleInputChange}  />
      </label>
      <input
      onClick={HandleSubmit}
      type="submit"
      value="cargar" />
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

        <Col sm = {6}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          
            <Col sm={2}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={4}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                </Tab.Pane>
              </Tab.Content>
            </Col>
        </Tab.Container>
        </Col>
      </Row>

      </Container>


    </div>
  );
}

export default App;
