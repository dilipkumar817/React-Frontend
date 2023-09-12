import { useState } from "react";
import axios from 'axios';

function AddTask() {
    const [trainingName, setTrainingName] = useState();
    const [trainingStartDate, setTrainingStartDate] = useState();
    const [trainingEndDate, setTrainingEndDate] = useState();
    const [completionStatus, setCompletionStatus] = useState();
    function addTask() {

        axios.post("http://localhost:8080/addtask?trainingName=" + trainingName + "&trainingStartDate=" + trainingStartDate + "&trainingEndDate=" + trainingEndDate + "&completionStatus=" + completionStatus);
        alert("Training details added");
    }
    return (
        <div className="table-design">
            <br></br>
            <h1 >Add Task</h1>
            <br></br>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Training Name</label>
                <input value={trainingName} onChange={e => setTrainingName(e.target.value)} placeholder="training name" />
            </div>
            <br></br>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Training Start Date</label>
                <input  value={trainingStartDate} onChange={e => setTrainingStartDate(e.target.value)} placeholder="training Start date" />
            </div>
            <br></br>
            <div class="mb-3">
                <label for="formGroupExampleInput3" class="form-label">Training End Date</label>
                <input value={trainingEndDate} onChange={e => setTrainingEndDate(e.target.value)} placeholder="training End date" />
            </div>
            <br></br>
            <div class="mb-3">
                <label for="formGroupExampleInput4" class="form-label">Completion Status</label>
                <input  value={completionStatus} onChange={e => setCompletionStatus(e.target.value)} placeholder="completion Status" />
            </div>
            <br></br>
            <div class="mb-10">
                <button type="submit" onClick={addTask}>submit</button>
            </div>
            <br></br>
            <br></br>
           < br></br>
            <br></br>
            
        </div>
       


    )
}
export default AddTask;