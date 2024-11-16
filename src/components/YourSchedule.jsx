// YourSchedule.jsx
import React from 'react';
import { motion } from 'framer-motion';

const YourSchedule = () => (
  <motion.div
    className="bg-[#BCB9D8] p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h3 className="text-lg font-semibold text-white">Your Schedule</h3>
    <p className="text-gray-300 mt-2">Upcoming Events</p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center justify-between">
        <span>Meeting with client</span>
        <span className="text-sm text-gray-400">2:00 PM</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Project Review</span>
        <span className="text-sm text-gray-400">4:00 PM</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Team Brainstorming</span>
        <span className="text-sm text-gray-400">6:00 PM</span>
      </li>
    </ul>
  </motion.div>
);

export default YourSchedule;
