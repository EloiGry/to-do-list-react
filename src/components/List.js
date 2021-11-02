import React, { Component } from 'react';

class List extends Component {
    render() {
        const {tasks, deleteTask, modifyTask} = this.props
        return (
            <div>
                <h2> List </h2>
                <div> {tasks.map((task, index) =>
                    <li className="list-group-item d-flex justify-content-between" key={index}> 
                        <div > <h6> Description :</h6> {task.description} </div> 
                        <div className="d-flex" > 
                            <p className="me-5"> <h6>Status : </h6> {task.status} </p>
                            <p> <button onClick={()=>{modifyTask(index)}} className="btn btn-outline-dark me-2"> Modifier </button></p>
                            <p> <button onClick={()=>{deleteTask(index)}} className="btn btn-outline-danger" type="button"> Supprimer </button></p>
                        </div>  
                        
                    </li> )}
                </div>
            </div>
        );
    }
}

export default List;