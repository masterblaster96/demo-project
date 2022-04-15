import React, {useState} from "react";
import Header from "./components/header";
import Form from "./components/form";
import './App.css';


const App = () =>  {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
    <div className="app-wrapper">
    <Header/>
    </div>
     <Form
     input = {input}
     setInput= {setInput}
     todos={todos}
     setTodos ={setTodos}
     
     
     />
    </div>);
}

export default App;
