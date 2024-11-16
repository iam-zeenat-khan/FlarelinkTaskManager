import React from 'react';
import { motion } from 'framer-motion';

const Calendar = () => (
  <motion.div
    className="bg-[#DEDEEA] p-4 rounded-md shadow-md mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-[#61678B] font-semibold text-lg">March, 2020</h3>
      <button className="text-[#78ACC1] text-sm">Two weeks</button>
    </div>
    <div className="grid grid-cols-7 gap-2 text-center text-sm text-[#61678B]">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
        <span key={idx} className="font-medium">{day}</span>
      ))}
      {[...Array(31)].map((_, day) => (
        <button
          key={day + 1}
          className={`p-2 rounded-full ${
            day + 1 === 11 ? 'bg-[#94a3dc] text-white' : 'hover:bg-[#98BFD0] hover:text-white'
          }`}
        >
          {day + 1}
        </button>
      ))}
    </div>
  </motion.div>
);

export default Calendar;
