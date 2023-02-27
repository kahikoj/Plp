import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import moment from 'moment';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask, onEditTask }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id}>
          <div>
            <strong>{task.title}</strong>
            <br />
            <small>{moment(task.dueDate).format('LLL')}</small>
          </div>
          <br />
          <p>{task.description}</p>
          <div className="d-flex justify-content-end">
            {task.completed ? (
              <Button variant="outline-secondary" onClick={() => onCompleteTask(task.id)}>
                Unmark as Complete
              </Button>
            ) : (
              <Button variant="outline-success" onClick={() => onCompleteTask(task.id)}>
                Mark as Complete
              </Button>
            )
            }
              <Button variant="outline-primary" onClick={() => onEditTask(task)}>Edit </Button>
              <Button variant="outline-danger" onClick={() => onDeleteTask(task.id)}>Delete</Button>
          </div>
        </ListGroup.Item>
    ))}
    </ListGroup>
    );
};

export default TaskList;