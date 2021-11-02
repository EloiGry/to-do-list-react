import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super()

        this.state = {
            task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange (e) {
        this.setState ({task : e.target.value})
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState ({task : ""})
    }

    render() {
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <input onChange={this.handleTaskDescriptionChange} value={this.state.task} type="text" className="col-8 m-1 rounded" />
                <button type="submit" className="btn btn-primary m-1 col-2" > Ajouter à ma liste </button>
            </form>

        );
    }
}

export default Form;