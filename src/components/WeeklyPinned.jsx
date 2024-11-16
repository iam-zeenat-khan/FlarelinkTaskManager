import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AddCircle } from '@mui/icons-material';

const WeeklyPinned = () => {
  const [pinnedItems, setPinnedItems] = useState([
    { title: 'Call doctor for tests', date: '15 Mar 2020 - 9:00 AM' },
    { title: 'Beatrice’s Birthday', date: '22 Mar 2020' },
  ]);

  const addPinnedItem = () => {
    const newItem = { title: 'New Weekly Task', date: 'Date TBD' };
    setPinnedItems([...pinnedItems, newItem]);
  };

  return (
    <motion.div
      className="bg-[#DEDEEA] p-4 rounded-md shadow-md space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[#61678B] font-semibold text-lg">Weekly Pinned</h2>
        <button className="text-[#78ACC1] text-sm">View all</button>
      </div>
      {pinnedItems.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-sm flex items-start space-x-4"
        >
          <div className="bg-[#F5D78B] p-2 rounded-full">
            <AddCircle fontSize="small" />
          </div>
          <div>
            <p className="text-[#61678B] font-medium">{item.title}</p>
            <span className="text-sm text-[#98BFD0]">{item.date}</span>
          </div>
        </div>
      ))}
      <button
        onClick={addPinnedItem}
        className="flex items-center space-x-2 bg-[#78ACC1] text-white px-4 py-2 rounded-md shadow-sm"
      >
        <AddCircle fontSize="small" />
        <span>Add new weekly pin</span>
      </button>
    </motion.div>
  );
};

export default WeeklyPinned;
