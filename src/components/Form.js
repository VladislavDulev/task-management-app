import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TASKS_STATUSES } from '../constants/statuses';




toast.configure();
const Form = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Created");

    const titleValidation = (title) => {
        if (title.trim() === '') {
            return ("Title field cannot be empty");
        }
        if (/[^a-zA-Z -]/.test(title)) {
            return ("Title field cannot have numbers as characters");
        }
        if (title.trim().length < 3) {
            return ("Title needs to be at least three characters");
        }
        return null;
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const clearForm = () => {
        setTitle("");
        setDescription("");
        props.showCardForm(false);
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        const returnTitleValidation = titleValidation(title);
        returnTitleValidation !== null ? toast.warn(returnTitleValidation, { position: toast.POSITION.TOP_CENTER }) :
            props.onCreateTask({
                title,
                description,
                status
            });
        clearForm();
    };

    return (
        <form className="input-form" onSubmit={onCreateTask}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    onChange={onChangeTitle}
                />
            </div>
            <div className="form-group">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={onChangeDescription}
                ></textarea>
            </div>
            <div>
                <select onChange={onChangeStatus} >
                    {TASKS_STATUSES.map((status) => (
                        <option value={status} key={status}>{status}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="submit btn btn-primary">Submit</button>
        </form>
    );
};

export default Form;