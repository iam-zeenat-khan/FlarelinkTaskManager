import React, { useState, useEffect } from 'react';
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

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false, priority: 3 };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const setPriority = (id, priority) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, priority } : task
    ));

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortCriteria === 'priority') return a.priority - b.priority;
      if (sortCriteria === 'completed') return a.completed - b.completed;
      return 0;
    });

  return (
    <div className="bg-[#F4F5FA] min-h-screen text-gray-900 font-sans">
      <Header setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Sidebar */}
        <aside className="col-span-3 bg-white rounded-lg shadow-lg p-4">
          <PinnedTasks />
          <Calendar />
        </aside>

        {/* Main Section with TaskList */}
        <main className="col-span-6 bg-grey-50 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Today's Tasks</h2>
          <TaskList
            tasks={filteredTasks}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setPriority={setPriority}
            setSortCriteria={setSortCriteria}
          />
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-3 bg-white rounded-lg shadow-lg p-4 space-y-6">
          <YourSchedule />

         <DateTimeDisplay />

          <div className="bg-[#BCB9D8] p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-white mb-2">Motivational Quote</h3>
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
