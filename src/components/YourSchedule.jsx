import React from 'react';
import { motion } from 'framer-motion';

const YourSchedule = () => (
  <motion.div
    className="bg-[#BCB9D8] p-6 rounded-lg shadow-md  mx-auto"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h3 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">
      Your Schedule
    </h3>
    <p className="text-gray-300 mt-2 text-center sm:text-left">Upcoming Events</p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center justify-between text-sm sm:text-base">
        <span>Meeting with client</span>
        <span className="text-xs sm:text-sm text-gray-400">2:00 PM</span>
      </li>
      <li className="flex items-center justify-between text-sm sm:text-base">
        <span>Project Review</span>
        <span className="text-xs sm:text-sm text-gray-400">4:00 PM</span>
      </li>
      <li className="flex items-center justify-between text-sm sm:text-base">
        <span>Team Brainstorming</span>
        <span className="text-xs sm:text-sm text-gray-400">6:00 PM</span>
      </li>
    </ul>
  </motion.div>
);

export default YourSchedule;
