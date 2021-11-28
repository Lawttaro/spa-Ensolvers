import './App.css';
import { Container, Row, Col, ListGroup, Modal, Button } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetTasks, SetEdit, setTaskEdit, ResetEdit, SetRm } from '../redux/taskSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

 


function EditTask () {
  const dispatch = useDispatch();
  const [data, setData] = useState('')
  const editAux = useSelector((state) => state.tasks.inEdit);

  const handleInputChange = (event) => {
    setData(event.target.value);
  }

  const HandleSubmit = (event) =>{
    event.preventDefault();
    document.getElementById("form-id2").reset();
    let url = 'http://127.0.0.1:8000/updateTask'
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: data, id: editAux.id })
    })
    .then(response => response.json())
    .then(resp => {
      dispatch(setTaskEdit(resp))
      dispatch(ResetEdit())
    })
  }
  return(
      <form onSubmit={HandleSubmit}  id="form-id2">
        <label>in Edit: {editAux.name}
          <input 
            type="text" 
            onChange={handleInputChange}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit" > upload</button>
      </form>
    );

}


function TaskList(){

  const dispatch = useDispatch();
  const listAux = useSelector((state) => state.tasks.value);
  const editAux = useSelector((state => state.tasks.isEdit));
  return(    
    <div>
      <ul>
      {listAux.map(task =>
        <li>
          {task.name}
          <button type="btn btn-primary" onClick={() => dispatch(SetEdit(task))}> edit</button>
          <button type="btn btn-primary" onClick={() => dispatch(SetRm(task))}> elim</button>
        </li>)}
      </ul>
    </div>
  );
}



function AddTask(){
  const dispatch = useDispatch();
  const [data, setData] = useState('')

  const handleInputChange = (event) => {
    setData(event.target.value);
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("form-id").reset();
    let url = "http://127.0.0.1:8000/createTask";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: data, id: "0" })
    })
    .then(response => response.json())
    .then(resp => {
      dispatch(SetTasks(resp))
    })
  }

  return(
    <form onSubmit={HandleSubmit} id="form-id">
      <label>New task:
        <input 
          type="text" 
          onChange={handleInputChange}
          required
        />
      </label>
      <button className="btn btn-primary" type="submit"> upload</button>
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
          <Col>
            <EditTask></EditTask>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

