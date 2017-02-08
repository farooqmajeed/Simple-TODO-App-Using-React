import React, { Component } from 'react';
import './App.css';

class App extends Component {
  removeTodo(index){
  let todos = this.state.todos;

  let todo = todos.find(function(todo){
    return todo.counter === index
  });
  todos.spilce(todo, 1);
  this.setState({
    todos: todos
  });
}


  addTodo(event){
    event.preventDefault();
  let name = this.refs.name.value;
  let lastName = this.refs.name.value;
  let counter = this.state.counter; 

  
  let todo = {
    name,
    lastName,
    counter

  };
  
 counter+=1;
  let todos = this.state.todos;
  todos.push(todo);

  this.setState({
    todos:todos,
    counter:counter
  });
  this.refs.todoForm.reset();
}
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      todos :[],
      title: "REACT TODO APP",
      counter : 0
    }
  }
  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
        <h1> {title} </h1>
        <form ref = "todo-form">
        <input type="text"  ref="name"/>
        {/* <input type="text" ref="lastName"/>*/}
         <button onClick={this.addTodo}> Add Todo</button>
        </form>
        <ul>
        {todos.map((todo=> <li key={todo.counter}>{todo.name}
     {/* <button onClick ={this.removeTodo}> Remove Todo </button>*/}
        </li> ))}
        
        </ul>
      </div>
    );
  }
}

export default App;
