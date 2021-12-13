import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddFold, agregTasks, setTask } from '../redux/foldSlice';
import { AddFolders} from '../redux/foldersSlice'
import 'bootstrap/dist/css/bootstrap.min.css';


function TaskInFold(){

  const dispatch = useDispatch();
  const listAux = useSelector((state) => state.tasks.value);
  const inSelect = useSelector((state) => state.folds.fold);
  const listSelect = useSelector((state) => state.folds.body);
  const infold = inSelect.id

  const HandleClick = (props) => {
    // props.task.idfold = inSelect.id
    dispatch(agregTasks(props.task))
  }

  const HandleCreate = () => {

    var bodyFold =  JSON.stringify({idFold: inSelect.id , nameFold: inSelect.name , listTask: listSelect});
    dispatch(AddFolders(bodyFold));
    let url = 'http://127.0.0.1:8000/updFold'
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listSelect, infold})
    });
  }
  return(    
    <div>
      <li>  folder name :{inSelect.name} </li>
      <ul>
      {listAux.map(task =>
        <li>
          {task.name}
          <button class="btn btn-link" size="sm" onClick={() => HandleClick({task})}> add </button>
        </li>)}
      </ul>
      <button 
        className="btn btn-primary"
        type="submit" 
        size="sm"
        onClick = {HandleCreate}
        disabled={infold + 1 ? false : true}>
        up</button>
    </div>
  );
}


function CreateFold(){
  const dispatch = useDispatch();
  const [data, setData] = useState('')

  const handleInputChange = (event) => {
    setData(event.target.value);
  }

  const HandleSubmit = (event) =>{
    event.preventDefault();
    document.getElementById("form-id3").reset();
    let url = "http://127.0.0.1:8000/createFold";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data, id: "0"})
    })
    .then(response => response.json())
    .then(resp => {
      dispatch(AddFold(resp))
      dispatch(setTask())
    })
  }
  return(
    <div>
      <form  id="form-id3" onSubmit={HandleSubmit}>
        <label>New fold:
          <input 
            type="text" 
            onChange={handleInputChange}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit"> upload</button>
      </form>
    </div>
  );
}


function ListFold() {
  const name = useSelector((state) => state.folds.fold);
  const listAux = useSelector((state) => state.folds.body)

  return(
    <div>
      <li> file name : {name.name}</li>  
        <ul>
          {listAux.map(fold => 
            <li>take :{fold.name}</li>
          )}
        </ul>
    </div>
  );
}

function Folders(){
  return(
    <Container>
      <Row>
        <Col>
          <CreateFold>
          </CreateFold>
          <TaskInFold></TaskInFold>
        </Col>
        <Col>
          <ListFold></ListFold>
        </Col>
      </Row> 
    </Container>
  );
}

export default Folders;


