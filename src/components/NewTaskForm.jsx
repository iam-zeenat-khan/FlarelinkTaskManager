import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const NewTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ title: taskTitle, priority }));
      setTaskTitle('');
    }
  };

  return (
    <div className="p-4 bg-soft-blue text-white rounded-lg mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task"
        className="p-2 w-full rounded mb-2"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="p-2 rounded bg-aqua-blue text-dark-blue mr-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAddTask} className="bg-aqua-blue text-dark-blue px-4 py-2 rounded">Add Task</button>
    </div>
  );
};

export default NewTaskForm;
