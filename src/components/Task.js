import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// Added changeComplete and deleteTask here 
const Task = ({ id, title, isComplete, updateTaskData, deleteTask }) => {
  // const [complete, setComplete] = useState(isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const task = {id,title,isComplete};
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {
          updateTaskData(id,task);
        }}
      >
        {title}
      </button>
      <button 
        className="tasks__item__remove button"
        onClick={() => deleteTask(id)}
      >
        x
      </button>
    </li>
  );
};


Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  // Added this prop for changeComplete and deleteTask below
  updateTaskData: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
