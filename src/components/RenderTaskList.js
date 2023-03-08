import { TASKS_STATUSES } from "../constants/statuses";
import TasksList from "./TasksList";

const RenderTaskLists = (props) => {
    const { tasks, onStatusChange, onDeleteTask } = props;
    return TASKS_STATUSES.map((status, id) => {
        const statusTasks = tasks.filter(task => task.status === status)
        return (
            <div className="col-md-3 card m-2 p-0" key={id}>
                <TasksList
                    key={status}
                    status={status}
                    tasks={statusTasks}
                    onStatusChange={onStatusChange}
                    onDeleteTask={onDeleteTask}
                />
            </div>

        );
    });
};

export default RenderTaskLists;