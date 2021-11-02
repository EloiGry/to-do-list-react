import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.modifyTask = this.modifyTask.bind(this)
  }

  addTask (str) {
    this.setState ({tasks : [{description: str, status: "To do",}, ...this.state.tasks]})
  }

  deleteTask (index) {
    const array = [...this.state.tasks]
    array.splice(index, 1)
    this.setState ({tasks : array})
  }

  modifyTask (index) {
    
  }

  render() {
    const {tasks} = this.state
    return (
      <div className="container">
        <h1>
          To do list
        </h1>
        <Form addTask={this.addTask}/>
        <List tasks={tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask} />
      </div>
    );
  }
}

export default App;
