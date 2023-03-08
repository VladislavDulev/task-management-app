import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from './components/TasksPage';
import { connect } from 'react-redux';
import { createTask, editTask, deleteTask } from './actions';

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, {status})) // connect of objects
  }

  const onCreateTask = ({title, description, status}) => {
    props.dispatch(createTask({title, description, status}))
  }

  const onDeleteTask = (id) => {
    props.dispatch(deleteTask(id))
  }

  return (
    <>
      <TasksPage 
      tasks={props.tasks} 
      onStatusChange={onStatusChange}
      onCreateTask={onCreateTask}
      onDeleteTask={onDeleteTask}
      />
    </>
  );
}

const mapStateToProps = state => {
  return{
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
