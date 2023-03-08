import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { TASKS_STATUSES } from '../constants/statuses';


const Task = (props) => {

    const onStatusChange = (e) => {
        props.onStatusChange(props.task.id, e.target.value)
    }

    const onDeleteTask = () => {
        props.onDeleteTask(props.task.id)
    }

    return (
        <>
        <form className="dropdown" onChange={onStatusChange}>
            <select defaultValue={props.task.status}>
                {TASKS_STATUSES.map((status) => (
                    <option value={status} key={status}>{status}</option>
                ))}
            </select>
        </form>
            <h2 className="card-title">{props.task.title}</h2>
            <p className="card-text">{props.task.description}</p>
            <p>ID: {props.task.id}</p>
            <FontAwesomeIcon 
            icon={faTrashAlt} 
            className="float-right m-3" 
            style={{color: "red", cursor: "pointer"}} 
            onClick={() => onDeleteTask(props.task.id)}
            />
        </>
    );
};

export default Task;
