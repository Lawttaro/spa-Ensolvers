import './App.css';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetTasks } from '../redux/taskSlice';

 




function TaskList(){
  const listAux = useSelector((state) => state.tasks.value);
  console.log(listAux)
  return(
    
    <div>
      <ListGroup  >
        <li>  
        {listAux.map((task) =>
          <li>
              <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>  
                {task}
          </li>
        )}
        </li>
      </ListGroup>
    </div>
    );
 }
//{cars.map((car) => <Car brand={car} />)


function AddTask(event){
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
      body: JSON.stringify({ task: data })
    })
    .then(response => response.json())
    .then(resp => {
      alert(resp.name)
      alert(resp)
      dispatch(SetTasks(resp.name))
    })
  }

  return(
    <form onSubmit={HandleSubmit} id="form-id">
      <label>New task:
        <input 
          type="text" 
          onChange={handleInputChange}
        />
      </label>
      <button className="btn btn-primary" type="submit"> upload</button>
    </form>
      );
}

  //   return(
//     <form  >
//       <label>
//         newTask:
//         <input
//         type="text"
//         value={data}
//         onChange={handleInputChange}  />
//       </label>
//       <input
//       onClick={HandleSubmit}
//       type="submit"
//        />
//     </form>
//   );
// }
 


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
