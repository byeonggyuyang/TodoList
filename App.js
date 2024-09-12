import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import {List, Paper,Container} from "@mui/material";
import AddTodo from './addTodo';


function App() {


  const [items, setItems] = useState([]);

  const addItem = (item) =>{
    item.id = 'ID-' + items.length;
    item.done = false;
    setItems([...items, item]);
  }

  const onTodoDeleteButtonClick = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Container maxWidth="md">

        <AddTodo addItem={addItem}/>

        <div className='TodoList'>
          <Paper style={{
            margin:16
            }}
          >

          <List>
            <Todo items={items} onTodoDeleteButtonClick={onTodoDeleteButtonClick}/>
          </List>

          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default App;
