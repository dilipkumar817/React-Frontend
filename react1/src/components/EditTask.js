import { useState } from "react";
import axios from "axios";

function EditTask() {
    const [id, setId] = useState();
    const [trainingName, setTrainingName] = useState();
    const [trainingStartDate, setTrainingStartDate] = useState();
    const [trainingEndDate, setTrainingEndDate] = useState();
    const [completionStatus, setCompletionStatus] = useState();
    const [tasks, setTasks] = useState([]);

    function updateTask() {
        axios.put("http://localhost:8080/edittask?id=" + id + "&trainingName=" + trainingName + "&trainingStartDate=" + trainingStartDate + "&trainingEndDate=" + trainingEndDate + "&completionStatus=" + completionStatus).then(res => setTasks(res.data));
        alert("Task has been Updated");
    }

    return (
        <div className="table-design">
            <br></br>
            <h1 style={{ paddingRight: "380px" }}>Update Task</h1>
            <br></br>
            <div className="col-md-6 col-sm-12 col-12">
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Training Id</label>
                        <input  value={id} onChange={e => setId(e.target.value)} placeholder="Training Id" required />
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Training Name</label>
                        <input value={trainingName} onChange={e => setTrainingName(e.target.value)} placeholder="Training Name" required />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Training Start Date</label>
                        <input  value={trainingStartDate} onChange={e => setTrainingStartDate(e.target.value)} placeholder="Training Start Date" required />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput3" class="form-label">Training End Date</label>
                        <input value={trainingEndDate} onChange={e => setTrainingEndDate(e.target.value)} placeholder="Training End date" required />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput4" class="form-label">Completion Status</label>
                        <input  value={completionStatus} onChange={e => setCompletionStatus(e.target.value)} placeholder="Completion Status" required />
                    </div>
                    <div class="mb-3">
                        <button type="submit" onClick={updateTask} className="btn btn-primary">UPDATE TASK</button>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </form>
            </div>

        </div>
    )
}
export default EditTask;