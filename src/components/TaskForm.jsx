import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTask({ id: Date.now(), title, description, completed: false }));
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 border rounded" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full mb-2 p-2 border rounded" />
      <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded">Add Task</button>
    </div>
  );
};

export default TaskForm;