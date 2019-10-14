import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'

class App extends Component {

  //Initial state
  state = {
    todo : [
      {
        id : 1,
        content : 'Listen music',
        completed: false
      },
      {
        id : 2,
        content : 'play counter strike',
        completed: false
      },
      {
        id : 3,
        content : 'play PUBG',
        completed: false
      }
    ],
    completedTask: 0,
    pendingTask: 3
  }

  //Delete Todo's Handler
  deleteTodos = (id , completed) => {
    //filter TODO for delete TODO
    const todo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    
    this.setState({
      todo,
      completedTask: (this.state.completedTask && completed) ? this.state.completedTask - 1 : this.state.completedTask,
      pendingTask: (this.state.pendingTask && !completed) ? this.state.pendingTask - 1 : this.state.pendingTask
    })

  }

  //Complete TODO's Handler
  completeTodos = (id) => {
    var counterIncrement = false
    const todo = this.state.todo.map(todo => {
      if(todo.id == id){

        //set value counterIncrement for setState completedTask/pendingTask
        todo.completed ? counterIncrement = false : counterIncrement = true
        //set value completed TODO's true/false
        todo.completed ? todo.completed = false : todo.completed = true

      }

      return todo
    });

    this.setState({
      todo,
      completedTask: counterIncrement ? this.state.completedTask + 1 : this.state.completedTask - 1,
      pendingTask: counterIncrement ? this.state.pendingTask - 1 : this.state.pendingTask + 1
      
    })

  }

  //ADD TODO's Handler
  addTodo = (todo) => {
    //generating random id
      todo.id = Math.floor(Math.random() * 100);
      let todoNew = [...this.state.todo, todo]
      this.setState({
        todo : todoNew,
        pendingTask: this.state.pendingTask + 1
      })
  }

 
  //for showing completed task css
    textStyleCompleted = (completed) => {
      if(completed){
      var classes = {
        'textDecoration': 'line-through'
      };
      }
      else{
        var classes = {
          'textDecoration': 'none'
        };
      }

      return classes;

      }

  render() {
    return (
      <div className="todo-app container">
       <h1 className = "center blue-text">Todo's List</h1>
       <Todos todos = {this.state.todo}  deleteTodos={this.deleteTodos}   completeTodos={this.completeTodos} textStyleCompleted={this.textStyleCompleted}/>
       <AddTodo addTodo={this.addTodo}/>
       <div className="row">
          <h6>completed Tasks :{this.state.completedTask}</h6>&nbsp;&nbsp;
          <h6>pending Tasks :{this.state.pendingTask}</h6>
       </div>
      </div>
    );
  }
}

export default App;
