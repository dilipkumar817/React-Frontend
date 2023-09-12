import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayTask() {

    const [tasks, setTasks] = useState([]);

    function displayTask() {
        axios.get("http://localhost:8080/getalltasks").then(res => setTasks(res.data));
    }

    useEffect(displayTask, []);
    return (
        <div className="table-structure">
            <br></br>
            <h1 style={{paddingRight:"250px"}}>Display Task</h1>
            <br></br>
            <div className="col-md-10 col-sm-12 col-12">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TRAINING NAME</th>
                        <th>TRAININIG START DATE</th>
                        <th>TRAINING END DATE</th>
                        <th>COMPLETION STATUS</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                        
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
                                    <td><Link to="/edittask">EDIT</Link></td>
                                    <td><Link to="/deletetask">DELETE</Link></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
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
export default DisplayTask;