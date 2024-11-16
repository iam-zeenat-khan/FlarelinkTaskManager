import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/taskSlice';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(toggleComplete(task.id))}>
          <FaCheck className={task.completed ? 'text-green-500' : 'text-gray-500'} />
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
