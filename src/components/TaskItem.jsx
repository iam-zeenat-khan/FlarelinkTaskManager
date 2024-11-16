import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, setTaskPriority } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handlePriorityChange = (event) => {
    dispatch(setTaskPriority({ id: task.id, priority: event.target.value }));
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded-md mb-2 shadow-sm ${task.completed ? 'bg-medium-purple text-white' : 'bg-light-purple text-black'} transition duration-300`}>
      <div onClick={() => dispatch(toggleTaskCompletion(task.id))} className="cursor-pointer flex-grow">
        <p className={`${task.completed ? 'line-through' : ''}`}>{task.title}</p>
      </div>
      <select onChange={handlePriorityChange} value={task.priority} className="text-sm text-dark-blue bg-aqua-blue rounded px-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500 ml-4">Delete</button>
    </div>
  );
};

export default TaskItem;
