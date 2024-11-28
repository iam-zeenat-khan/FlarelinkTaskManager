import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import PinnedTasks from './components/PinnedTasks';
import Calendar from './components/Calendar';
import YourSchedule from './components/YourSchedule';
import DateTimeDisplay from './components/DateTimeDisplay';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('default');

  // Load dummy tasks initially
  useEffect(() => {
    const dummyTasks = [
      { id: 1, title: 'Wake up Buddy', completed: false, priority: 1 },
      { id: 2, title: 'Morning Yoga', completed: false, priority: 2 },
      { id: 3, title: 'Daily Workout', completed: false, priority: 2 },
      { id: 4, title: 'Project Kickoff Meeting', completed: false, priority: 1 },
      { id: 5, title: 'Lunch Break', completed: false, priority: 3 },
    ];
    setTasks(dummyTasks);
  }, []);

  // Callback functions to prevent unnecessary re-renders
  const addTask = useCallback((title) => {
    const newTask = { id: Date.now(), title, completed: false, priority: 3 };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  const deleteTask = useCallback(
    (id) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)),
    []
  );

  const toggleComplete = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const setPriority = useCallback((id, priority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, priority } : task
      )
    );
  }, []);

  // Filtered and sorted tasks
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortCriteria === 'priority') return a.priority - b.priority;
      if (sortCriteria === 'completed') return a.completed - b.completed;
      return 0;
    });

  return (
    <div className="bg-[#F4F5FA] min-h-screen text-gray-900 font-sans">
      <Header setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 p-6">
        {/* Left Sidebar */}
        <aside className="col-span-3 md:col-span-12 lg:col-span-3 bg-white rounded-lg shadow-lg p-4">
          <PinnedTasks />
          <Calendar />
        </aside>

        {/* Main Section */}
        <main className="col-span-6 md:col-span-12 lg:col-span-6 bg-gray-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Today's Tasks</h2>
          {filteredTasks.length > 0 ? (
            <TaskList
              tasks={filteredTasks}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              setPriority={setPriority}
              setSortCriteria={setSortCriteria}
            />
          ) : (
            <p className="text-gray-500 italic">No tasks found.</p>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-3 md:col-span-12 lg:col-span-3 bg-white rounded-lg shadow-lg p-4 space-y-6">
          <YourSchedule />
          <DateTimeDisplay />
          <div className="bg-[#BCB9D8] p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-white mb-2">
              Motivational Quote
            </h3>
            <p className="text-[#424347] italic">
              "The secret of getting ahead is getting started."
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
