import React, { Component } from 'react';

class List extends Component {
    render() {
        const {tasks, deleteTask, setEditLine, editLine} = this.props
        return (
            <div>
                <h2> List </h2>
                <div> {tasks.map((task, index) =>
                    <li className="list-group-item d-flex justify-content-between" key={index}> 
                        <div > <h6> Description :</h6> {index === editLine ? (<input value={task.description} />) : (<p>{task.description}</p>)} </div> 
                        <div className="d-flex" > 
                            <p className="me-5"> <h6>Status : </h6> {index === editLine ? 
                                    (<select>
                                         <option value="To Do"> To do </option> 
                                         <option value="Doing"> Doing </option> 
                                         <option value="Done"> Done </option>
                                    </select>) : 
                                        (<span> {task.status} </span>)}  </p>
                            <p> <button onClick={()=>{setEditLine(index)}} className="btn btn-outline-dark me-2"> Modifier </button></p>
                            {index === editLine ? (<p> <button onClick={()=>{deleteTask(index)}} className="btn btn-outline-success" type="button"> Valider </button></p>) :
                                                  (<p> <button onClick={()=>{deleteTask(index)}} className="btn btn-outline-danger" type="button"> Supprimer </button></p>)}
                        </div>  
                        
                    </li> )}
                </div>
            </div>
        );
    }
}

export default List;