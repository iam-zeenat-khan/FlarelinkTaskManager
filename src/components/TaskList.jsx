import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const TaskList = ({ tasks, addTask, deleteTask, toggleComplete, setPriority, setSortCriteria }) => {
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Task Input */}
      <div className="mb-6 flex items-center space-x-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#bfb9f2] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5A56D9] transition-all"
        >
          Add
        </button>
      </div>

      {/* Search and Sort Options */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <select
          onChange={(e) => setSortCriteria(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="priority">Sort by Priority</option>
          <option value="completed">Sort by Completion</option>
        </select>
      </div>

      {/* Task Cards */}
      <ul className="space-y-4">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg shadow-lg flex justify-between items-center ${
                task.completed ? 'bg-gray-100 line-through' : 'bg-[#F5F7FF]'
              }`}
            >
              {/* Task Details */}
              <div className="flex items-center space-x-3">
                <CheckCircleIcon
                  onClick={() => toggleComplete(task.id)}
                  className={`cursor-pointer text-2xl ${
                    task.completed ? 'text-green-500' : 'text-gray-500'
                  }`}
                />
                <p className="text-gray-800">{task.title}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <select
                  value={task.priority}
                  onChange={(e) => setPriority(task.id, e.target.value)}
                  className="p-2 bg-white border border-gray-300 rounded-lg"
                >
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
                <DeleteIcon
                  onClick={() => deleteTask(task.id)}
                  className="cursor-pointer text-purple-400 hover:text-purple-700 transition"
                />
              </div>
            </motion.li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
