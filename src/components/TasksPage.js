/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./TasksPage.css";
import RenderTaskLists from "./RenderTaskList";
import Form from "./Form";


const TasksPage = (props) => {
    const [cardForm, showCardForm] = useState(false);

    const formToggler = () => {
        showCardForm(!cardForm)
    }

    return (
        <div className="containter main-container">

            <button className="btn btn-success m-3" onClick={formToggler}>+</button>
            <div className="jumbotron py-3">
                <h2 className="display-4 text-center">Task Manager</h2>
                {/* input form*/}
                {cardForm && (<Form {...props} showCardForm={showCardForm} />)}
            </div>
            <div className="row d-flex justify-content-center position-relative" style={
                { background: "#e9ecef" }}
            >
                <RenderTaskLists {...props} />
            </div>
        </div>
    );
};

export default TasksPage;
