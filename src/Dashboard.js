import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import MyNavbar from './Navbar'

//Css//
import './App.css'

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const handleAddTask = (task) => {
    const newTask = { ...task, id: taskIdCounter, completed: false };
    setTasks([...tasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <MyNavbar />
      <Container className="container">
        <Row>
          <Col>
            <h1>Task Manager</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <TaskForm onAddTask={handleAddTask} />
          </Col>
          <Col xs={12} md={6}>
            <TaskList
              tasks={tasks}
              onCompleteTask={handleCompleteTask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
