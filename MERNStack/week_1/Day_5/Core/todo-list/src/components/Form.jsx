import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Form = ({ setTasks, tasks }) => {
    const [task, setTask] = useState('');
    const formHandler = e => {
        e.preventDefault();
        setTasks([...tasks, { id: uuidv4(), completed: false, deleted: false, task: task }]);
        setTask('');
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <fieldset>
                <label>Add Task  : </label>
                </fieldset>
                <fieldset>
                <input type="text" placeholder='add task' value={task} onChange={(e) => setTask(e.target.value)} />
                </fieldset>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form