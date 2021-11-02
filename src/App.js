import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      editLine : null
    }

    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.setEditLine = this.setEditLine.bind(this)
    // this.modifyTask = this.modifyTask.bind(this)
  }

  addTask (str) {
    this.setState ({tasks : [{description: str, status: "To do"}, ...this.state.tasks]})
  }

  deleteTask (index) {
    const array = [...this.state.tasks]
    array.splice(index, 1)
    this.setState ({tasks : array})
  }

  setEditLine (index) {
    this.setState ({editLine : index})
  }


  render() {
    const {tasks, editLine} = this.state
    return (
      <div className="container">
        <h1>
          To do list
        </h1>
        <Form addTask={this.addTask}/>
        <List tasks={tasks} deleteTask={this.deleteTask} setEditLine={this.setEditLine} editLine={editLine} />
      </div>
    );
  }
}

export default App;
