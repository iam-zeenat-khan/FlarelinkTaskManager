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
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Task Input */}
      <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#bfb9f2] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5A56D9] transition-all w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* Search and Sort Options */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center space-y-4 sm:space-y-0 mb-6">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 sm:w-auto p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <select
          onChange={(e) => setSortCriteria(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm w-full sm:w-auto"
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
              className={`p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-stretch sm:items-center space-y-4 sm:space-y-0 bg-[#F5F7FF] ${
                task.completed ? 'bg-gray-100 line-through' : ''
              }`}
            >
              {/* Task Details */}
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <CheckCircleIcon
                  onClick={() => toggleComplete(task.id)}
                  className={`cursor-pointer text-2xl ${
                    task.completed ? 'text-green-500' : 'text-gray-500'
                  }`}
                />
                <p className="text-gray-800 break-words flex-1">{task.title}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <select
                  value={task.priority}
                  onChange={(e) => setPriority(task.id, e.target.value)}
                  className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm w-full sm:w-auto"
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
