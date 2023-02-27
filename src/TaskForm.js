import React, { useState } from 'react';
import { Button, Form ,Row,} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleAddTask = () => {
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
    setDueDate(new Date());
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <br />

          <Form.Control 
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Group >
          <Form.Label>Description</Form.Label>
          <br />

          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Group >
          <Form.Label>Due Date</Form.Label>
          <br />

          <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        </Form.Group>
        <br/>

        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Row>
    </Form>
  );
};


export default TaskForm;