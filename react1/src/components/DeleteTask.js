import axios from "axios";
import { useState, useEffect } from "react";

function DeleteTask() {

    const [tasks, setTasks] = useState([]);
    function displayTask() {
        axios.get("http://localhost:8080/getalltasks").then(res => setTasks(res.data));
    }
    function deleteTask(id) {
        axios.delete("http://localhost:8080/deletebytaskid?id=" + id).then(res => { displayTask() });
        alert("Task has been deleted");
    }

    function updateStatus(id, trainingName, trainingStartDate, trainingEndDate, completionStatus) {
        axios.put("http://localhost:8080/edittask?id=" + id + "&trainingName=" + trainingName + "&trainingStartDate=" + trainingStartDate + "&trainingEndDate=" + trainingEndDate + "&completionStatus=" + completionStatus).then(res => { displayTask() });
        alert("Status has been Updated");
    }
    useEffect(displayTask, []);

    return (
        <div className="table1-structure">
            <br></br>
            <h1>Delete Task</h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TRAINING NAME</th>
                                <th>TRAININGSTART DATE</th>
                                <th>TRAININGEND DATE</th>
                                <th>COMPLETION STATUS</th>
                                <th>DELETE TASK & UPDATE STATUS </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map(temp => {
                                    return (
                                        <tr>
                                            <td>{temp.id}</td>
                                            <td>{temp.trainingName}</td>
                                            <td>{temp.trainingStartDate}</td>
                                            <td>{temp.trainingEndDate}</td>
                                            <td>{temp.completionStatus}</td>
                                            <td>
                                                <button type="button" onClick={e => deleteTask(temp.id)} >Delete</button>
                                                <button type="button" onClick={e => updateStatus(temp.id, temp.trainingName, temp.trainingStartDate, temp.trainingEndDate, "completed")} >Completed</button>

                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}
export default DeleteTask;