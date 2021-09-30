import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import React, { useState } from 'react';
import { AddTodo } from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { About } from './Components/About';

function App() {
  const [todos, settodos] = useState([
    {
      sno: 1,
      title: "Go to Market",
      desc: "Kuch kam hai merko sab btadu terko"
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "Kuch kam hai merko sab btadu terko"
    },
    {
      sno: 3,
      title: "Go to College",
      desc: "Kuch kam hai merko sab btadu terko"
    }
  ]);
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, myTodo]);


  }

  const onDelete = (todo) => {
    console.log('Mujhe Mat Maro', todo)
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  return (
    <>
      <Router>
        <Header title="Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return( <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>


        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
