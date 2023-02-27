import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (editedTask) => {
    setTasks(
      tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h1>Task Manager</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskForm onAddTask={handleAddTask} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;