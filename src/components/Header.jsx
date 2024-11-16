import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';

const Header = () => (
  <motion.header
    className="flex items-center justify-between bg-[#BCB9D8]  p-5 rounded-2xl shadow-xl"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Left Section: Logo */}
    <div className="flex items-center space-x-3">
      <div className="bg-[#DEDEEA] p-3 rounded-full">
        <span className="text-lg font-bold text-[#aca9e5]">Taskly</span>
      </div>
    </div>

    {/* Center Section: Title and Date */}
    <div className="text-center">
      <h2 className="text-white text-center text-5xl font-extrabold">Today's Schedule</h2>
      <p className="text-[#191a1a] font-semibold text-xl text-left leading-10">{new Date().toDateString()}</p>
    </div>

    {/* Right Section: Add Button and Profile */}
    <div className="flex items-center space-x-5">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer text-purple-500 hover:text-purple-700 transition p-3 rounded-full text-white shadow-md transition"
        aria-label="Add Task"
      >
        <AddIcon   />
      </motion.button>
      <div className="flex items-center space-x-3">
        {/* <div>
          <p className="text-white font-medium text-sm">Mark Collins</p>
          <p className="text-[#BCB9D8] text-xs">My Settings</p>
        </div>
        <Avatar alt="Mark Collins" src="/static/images/avatar/1.jpg" /> */}
      </div>
    </div>
  </motion.header>
);

export default Header;
